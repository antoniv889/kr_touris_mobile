import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gastro-object',
  templateUrl: './gastro-object.page.html',
  styleUrls: ['./gastro-object.page.scss'],
})
export class GastroObjectPage implements OnInit {
  id: any;
  imgUrl: any;
  comments:any = [];
  author_id = localStorage.getItem('user_id');
  user_id = localStorage.getItem('user_id');


  constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService){
      this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getPostById();
    this.getComment();
  }
  gastro:any = [];
  latitude:number;
  longitude:number;
  getPostById(){
    this.dataService.getPostById(this.id).subscribe(res=>{
      this.gastro = res[0];
      this.imgUrl = res[1];
      this.latitude =  +this.gastro[0].latitude;
      this.longitude = +this.gastro[0].longitude;
      this.gastro = this.gastro[0];
    })
  }
  getComment(){
    this.dataService.getComment(this.id).subscribe(res=>{
      this.comments = res;
      this.comments.reverse();
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
