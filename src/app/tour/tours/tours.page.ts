import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {
  
  constructor(private dataService: DatabaseService) { }

  ngOnInit(): void {
    this.getPostByCategory();
    this.getUserLikes();
  }
  tours:any = [];
  toursImages: any = [];
  userLikes: any = [];
  postLikes: any = [];
  data: any = [];
  user_id = localStorage.getItem('user_id');
  getPostByCategory(){
    this.dataService.getPostList(5).subscribe(res=>{
      this.tours = res;
      for(let i=0;i<this.tours.length;i++){
        this.dataService.getMediaUrl(this.tours[i].id).subscribe(res=>{
          this.toursImages[i] = res;
        });
        this.dataService.postlikes(this.tours[i].id).subscribe(res=>{
          this.data = res;
          this.postLikes[i] = this.data[this.data.length-1];
        });
      }
    })
  }


  userId:number = +this.user_id;
  getUserLikes(){
    console.log(this.   userId);
    this.dataService.userlikes(this.userId).subscribe(res=>{
      this.userLikes = res;
      console.log(this.userLikes);
    });
  }
  counter:number;
  numLikes:number = 0;

  userLikesPost(post_id:any, count:number){
    this.numLikes = 0;
    if(!this.user_id){
      alert('Ви не увійшли в аккаунт');
    } else {
      for(let i = 0; i < this.userLikes.length; i++){
        if(post_id === this.userLikes[i].post_id) this.numLikes++;
      }
      this.counter = +count;
      if(this.numLikes%2==0)this.counter++;
      else this.counter--;
      this.dataService.userlikespost(post_id, this.counter, this.user_id)
        .subscribe(
          response => {
            for(let i=0;i<this.tours.length;i++){
              this.dataService.postlikes(this.tours[i].id).subscribe(res=>{
                this.data = res;
                this.postLikes[i] = this.data[this.data.length-1];
              });
            }
            this.getUserLikes();
          },
          error => console.log(error)
        );
    }

  }
}