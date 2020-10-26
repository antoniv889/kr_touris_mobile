import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-place-object',
    templateUrl: './place-object.page.html',
    styleUrls: ['./place-object.page.scss'],
})
export class PlaceObjectPage implements OnInit {
    id: any;
    imgUrl: any;
    comments: any = [];
    author_id = localStorage.getItem('user_id');
    user_id = localStorage.getItem('user_id');

    constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService) {
        this.id = activateRoute.snapshot.params['id'];
    }
    ngOnInit(): void {
        this.getPostById();
        this.getComment();
    }
    attraction: any = [];
    latitude: number;
    longitude: number;
    mapLink: string = 'https://www.google.com/maps/place/';
    getPostById() {
        this.dataService.getPostById(this.id).subscribe(res => {
            this.attraction = res[0];
            this.imgUrl = res[1];
            this.latitude = +this.attraction[0].latitude;
            this.longitude = +this.attraction[0].longitude;
            this.mapLink += this.latitude + ',' + this.longitude; 
            this.attraction = this.attraction[0];
        })
    }
    getComment() {
        this.dataService.getComment(this.id).subscribe(res => {
            // console.log(res);
            this.comments = res;
            this.comments.reverse();
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
