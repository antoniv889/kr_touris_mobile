import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-gastrosettings',
  templateUrl: './gastrosettings.component.html',
  styleUrls: ['./gastrosettings.component.scss'],
})
export class GastrosettingsComponent implements OnInit {
    @Input() hotels_filter: any;
    @Input() hotels: any;
    @Input() types: any;
    @Input() popularity;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    async close(){
        await this.modalCtrl.dismiss({
            hotels_filter: this.hotels_filter, 
            types: this.types,
            popularity: this.popularity,
        });
    }
    filter_types:any = [];
    category_id: string = '';
    selectType(type, i) {
        var checked = false;

        for (let index = 0; index < this.filter_types.length; index++) {
            if (this.filter_types[index] === type) {
                checked = true;
            }
        }

        if (checked) {
            this.filter_types = this.filter_types.filter(function (value, index, arr) { return value !== type; });
        }
        if (!checked) {
            this.filter_types.push(type);
        }

        var newSet = [];
        this.filter_types.forEach(element => {
            var set = this.hotels.filter(function (value, index, arr) {
                return value.category_id == element;
            });
            set.forEach(item => {
                newSet.push(item);
            });

        });


        if (this.filter_types.length > 0) {
            this.hotels_filter = newSet;
        }
        else {
            this.hotels_filter = this.hotels;
        }
    }
    asc(sortby:string){
        this.hotels_filter.sort((b,a) => a.google_rating ? a.google_rating.localeCompare(b.google_rating): -1);
    }

}
