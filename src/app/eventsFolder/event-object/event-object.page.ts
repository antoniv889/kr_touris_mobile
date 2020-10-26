import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-event-object',
  templateUrl: './event-object.page.html',
  styleUrls: ['./event-object.page.scss'],
})
export class EventObjectPage implements OnInit {
    id: any;
    imgUrl: any;
    author_id = localStorage.getItem('user_id');
    user_id = localStorage.getItem('user_id');
    comments: any = [];
    url = window.location.href;
    constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService) {
        // this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit(): void {

        this.activateRoute.params.subscribe(params => {
            this.id = params['id']; //or whatever you put in your routing
            window.scrollTo(0, 0);
            this.getPostById();
            this.getComment();
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        });
    }
    event: any = [];

    getPostById() {
        this.dataService.getPostById(this.id).subscribe(res => {
            console.log(res);
            this.event = res[0];
            this.imgUrl = res[1];
            this.event = this.event[0];
        })
    }

    getComment() {
        this.dataService.getComment(this.id).subscribe(res => {
            this.comments = res;
        });
    }
    addComment(form: NgForm) {
        if (!this.user_id) {
            alert('Ви не увійшли в аккаунт');
        } else {
            this.dataService.addComment(this.author_id, this.id, form.value.content)
                .subscribe(
                    response => {
                        this.getComment();
                    },
                    error => console.log(error)
                )
        }
    }
}
