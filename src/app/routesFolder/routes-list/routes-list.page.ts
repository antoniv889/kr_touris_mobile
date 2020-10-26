import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { ModalController } from '@ionic/angular';
import { SettingsComponent } from '../settings/settings.component';
@Component({
    selector: 'app-routes-list',
    templateUrl: './routes-list.page.html',
    styleUrls: ['./routes-list.page.scss'],
})
export class RoutesListPage implements OnInit {
    id: any;
    type: number = 1;
    routes: any = [];
    routeImages: any = [];
    userLikes: any = [];
    postLikes: any = [];
    data: any = [];
    user_id = localStorage.getItem('user_id');
    lastLike: number;
    userpostLikes: any = [];
    likes: any = [];


    //filter data
    routes_filter: any = [];
    routetypes:any = [
        {title: 'піший', checked: false},
        {title: 'вело', checked: false},
        {title: 'авто', checked: false},
        {title: 'водний', checked: false},
    ];
    length_sel: string;
    difficulty_sel: string;
    popularity: boolean = false;
    actuality: boolean = false;

    constructor(private activateRoute: ActivatedRoute, 
                private dataService: DatabaseService,
                private modalCtrl: ModalController) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.getPostByCategory();
        this.getUserLikes();
    }
    getPostByCategory() {
        this.dataService.getPostByCategory(this.type, this.id).subscribe(res => {
            this.routes = res;
            this.routes_filter = this.routes;
        })
    }
    userId: number = +this.user_id;
    getUserLikes() {
        this.dataService.userlikes(this.userId).subscribe(res => {
            this.userLikes = res;
            for (let i = 0; i < this.routes.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.userLikes.length; j++) {
                    if (this.routes[i].id === (+this.userLikes[j].post_id)) this.lastLike++;
                }
                this.userpostLikes[i] = this.lastLike;
            }
        });


        this.dataService.getLikes().subscribe(res => {
            this.likes = res;
            for (let i = 0; i < this.routes.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.likes.length; j++) {
                    if (this.routes[i].id === (+this.likes[j].post_id)) this.lastLike = +this.likes[j].count;
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
            component: SettingsComponent,
            componentProps: {
                routes_filter: this.routes_filter,
                routes:this.routes,
                routetypes:this.routetypes,
                length_sel:this.length_sel,
                difficulty_sel:this.difficulty_sel,
                popularity: this.popularity,
                actuality: this.actuality
            }
        })
        await modal.present();
        modal.onDidDismiss().then( res => {
            this.routes_filter = res.data.routes_filter;
            this.routetypes = res.data.routetypes;
            this.length_sel = res.data.length_sel;
            this.difficulty_sel = res.data.difficulty_sel;
            this.popularity = res.data.popularity;
            this.actuality = res.data.actuality;
        })
    }
}
