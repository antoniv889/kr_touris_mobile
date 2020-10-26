import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit { 

  constructor(private dataService: DatabaseService) { }
  categories:any = [];

  ngOnInit(){
    this.getCategories();
  }
  getCategories(){
    this.dataService.getCategories(3).subscribe(res=>{
      this.categories = res;
      console.log(this.categories);
    })
  }

}
