import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-places-list',
    templateUrl: './places-list.page.html',
    styleUrls: ['./places-list.page.scss'],
})
export class PlacesListPage implements OnInit {
    id: any;
    type: number = 3;
    constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit(): void {
        this.getPostByCategory();
    }

    objects: any = [];
    routeImages: any = [];
    userLikes: any = [];
    postLikes: any = [];
    data: any = [];
    user_id = localStorage.getItem('user_id');
    userpostLikes: any = [];
    userId: number = +this.user_id;
    lastLike: number;
    likes: any = [];
    getPostByCategory() {
        this.dataService.getPostByCategory(3, this.id).subscribe(res => {
            this.objects = res;
            console.log(res);
            this.getUserLikes();
        });
    }

    getUserLikes() {
        this.dataService.userlikes(this.userId).subscribe(res => {
            this.userLikes = res;
            for (let i = 0; i < this.objects.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.userLikes.length; j++) {
                    if (this.objects[i].id === (+this.userLikes[j].post_id)) this.lastLike++;
                }
                this.userpostLikes[i] = this.lastLike;
            }
        });

        this.dataService.getLikes().subscribe(res => {
            this.likes = res;
            for (let i = 0; i < this.objects.length; i++) {
                this.lastLike = 0;
                for (let j = 0; j < this.likes.length; j++) {
                    if (this.objects[i].id === (+this.likes[j].post_id)) this.lastLike = +this.likes[j].count;
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
            if (+this.postLikes[index] % 2 == 0) this.counter++;
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

}
