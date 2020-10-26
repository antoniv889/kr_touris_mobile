import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tour-object',
  templateUrl: './tour-object.page.html',
  styleUrls: ['./tour-object.page.scss'],
})
export class TourObjectPage implements OnInit {
  id: any;
  imgUrl: any;
  author_id = localStorage.getItem('user_id');
  user_id = localStorage.getItem('user_id');

  comments:any = [];
  commentAuthor:any = [];

  constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService){
      this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPostById();
    this.getComment();
    this.getRouteObjects();
  }
  tour:any = [];

  getPostById(){
    this.dataService.getPostById(this.id).subscribe(res=>{
      console.log(res);
      this.tour = res[0];
      this.imgUrl = res[1];
      this.tour = this.tour[0];
    })
  }
  rid:number;
  latitude:any = [];
  longitude:any = [];
  data: any;
  excursions:any = [];
  cnt:number = 0;
  getRouteObjects(){
    this.dataService.getRouteObjects(this.id).subscribe(res=>{
      this.data = res;
      console.log(this.data, '1212121212121212');
      for(let i = 0; i<this.data.length;i++){
        this.rid = this.data[i].attraction_id;
        this.dataService.getPostById(this.rid).subscribe(response=>{
          if(response){
            this.excursions[this.cnt] = response;
            console.log(this.excursions,i);
            this.latitude[this.cnt] = +this.excursions[this.cnt][0][0].latitude;
            this.longitude[this.cnt] = +this.excursions[this.cnt][0][0].longitude;
            this.cnt++;
          }
         
        });
      }
      console.log(this.latitude);
      console.log(this.longitude);

    });
  }
  getComment(){
    this.dataService.getComment(this.id).subscribe(res=>{
      // console.log(res);
      this.comments = res;
      for(let i=0; i<this.comments.length; i++){
        this.dataService.getCommentAuthor(this.comments[i].author_id).subscribe(response=>{
          this.commentAuthor[i] = response;
        })
      }
      console.log(this.comments);

      console.log(this.commentAuthor);
    });
  }
  addComment(form: NgForm){
    if(!this.user_id){
      alert('Ви не увійшли в аккаунт');
    } else {
    this.dataService.addComment(this.author_id, this.id, form.value.content)
      .subscribe(
        response =>{
          this.getComment();
        },
        error => console.log(error)
      )
    }
  }
}
