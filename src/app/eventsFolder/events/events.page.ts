import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { EventssettingsComponent } from '../eventssettings/eventssettings.component';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

    constructor(private dataService: DatabaseService,
                private modalCtrl: ModalController) { }

    ngOnInit() {
        this.getPostByCategory();
    }
    events:any = [];
    events_filter: any = [];

    getPostByCategory() {
        this.dataService.getPostList(5).subscribe(res => {
            this.events = res;
            this.events_filter = this.events;
            this.getUserLikes();
        })
    }
    user_id = localStorage.getItem('user_id');
    likes: any = [];
    userId: number = +this.user_id;
    userLikes: any = [];
    userpostLikes: any = [];
    postLikes: any = [];
    lastLike: number;
    sel: string;
    getUserLikes() {
        this.dataService.userlikes(this.userId).subscribe(res => {
            this.userLikes = res;
            for (let i = 0; i < this.events.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.userLikes.length; j++) {
                    // console.log(this.events[i].id, this.userLikes);
                    if (this.events[i].id === (+this.userLikes[j].post_id)) this.lastLike++;
                }
                this.userpostLikes[i] = this.lastLike;
            }
        });
        this.dataService.getLikes().subscribe(res => {
            this.likes = res;
            for (let i = 0; i < this.events.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.likes.length; j++) {
                    if (this.events[i].id === (+this.likes[j].post_id)) this.lastLike = +this.likes[j].count;
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
            component: EventssettingsComponent,
            componentProps: {
                events_filter: this.events_filter,
                events:this.events,
                sel:this.sel
            }
        })
        await modal.present();
        modal.onDidDismiss().then( res => {
            this.events_filter = res.data.events_filter;
            this.sel = res.data.sel;
        })
    }
}
