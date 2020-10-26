import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-routes-categories',
  templateUrl: './routes-categories.page.html',
  styleUrls: ['./routes-categories.page.scss'],
})
export class RoutesCategoriesPage implements OnInit {

  constructor(private dataService: DatabaseService){
  }

  categories:any = [];

  ngOnInit(){
    this.getCategories();
  }
  getCategories(){
    this.dataService.getCategories(1).subscribe(res=>{
      this.categories = res;
      console.log(this.categories);
    })
  }
}
