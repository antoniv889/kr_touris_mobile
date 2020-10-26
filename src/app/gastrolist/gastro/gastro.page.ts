import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { GastrosettingsComponent } from '../gastrosettings/gastrosettings.component';

@Component({
    selector: 'app-gastro',
    templateUrl: './gastro.page.html',
    styleUrls: ['./gastro.page.scss'],
})
export class GastroPage implements OnInit {
    id: any;

    constructor(private activateRoute: ActivatedRoute, 
                private dataService: DatabaseService,
                private modalCtrl: ModalController) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit(): void {
        this.getPostList();
    }
    hotels: any = [];
    hotels_filter: any = [];
    routeImages: any = [];
    userLikes: any = [];
    postLikes: any = [];
    data: any = [];
    user_id = localStorage.getItem('user_id');

    getPostList() {
        this.dataService.getPostList(4).subscribe(res => {
            this.hotels = res;
            this.hotels_filter = this.hotels;
        })
        this.getUserLikes();
    }
    userId: number = +this.user_id;
    lastLike: number;
    userpostLikes: any = [];
    likes: any = [];

    types:any = [
        {title: 'гастро', checked: false, id: 9},
        {title: 'готелі', checked: false, id: 8},
    ];
    popularity: boolean = false;
    getUserLikes() {
        this.dataService.userlikes(this.userId).subscribe(res => {
            this.userLikes = res;
            for (let i = 0; i < this.hotels.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.userLikes.length; j++) {
                    if (this.hotels[i].id === (+this.userLikes[j].post_id)) this.lastLike++;
                }
                this.userpostLikes[i] = this.lastLike;
            }
        });
        console.log(this.userLikes);
        this.dataService.getLikes().subscribe(res => {
            this.likes = res;
            for (let i = 0; i < this.hotels.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.likes.length; j++) {
                    if (this.hotels[i].id === (+this.likes[j].post_id)) this.lastLike = +this.likes[j].count;
                }
                this.postLikes[i] = this.lastLike;
            }
        });
    }
    counter: number;
    numLikes: number = 0;

    userLikesPost(post_id: any, count: number, index: number) {
        this.numLikes = 0;
        if (!this.user_id) {
            alert('Ви не увійшли в аккаунт');
        } else {
            this.counter = +count;
            if (+this.userpostLikes[index] % 2 == 0) this.counter++;
            else this.counter--;
            this.dataService.userlikespost(post_id, this.counter, this.user_id)
                .subscribe(
                    response => {
                        this.getUserLikes();
                    },
                    error => console.log(error)
                );
        }
    }
    async showModal(){
        const modal = await this.modalCtrl.create({
            component: GastrosettingsComponent,
            componentProps: {
                hotels_filter: this.hotels_filter,
                hotels:this.hotels,
                types:this.types,
                popularity:this.popularity,
            }
        })
        await modal.present();
        modal.onDidDismiss().then( res => {
            this.hotels_filter = res.data.hotels_filter;
            this.types = res.data.types;
            this.popularity = res.data.popularity;
        })
    }
}
