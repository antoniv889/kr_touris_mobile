import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    @Input() routes_filter: any;
    @Input() routes: any;
    @Input() routetypes: any;
    @Input() length_sel: string;
    @Input() difficulty_sel: string;    
    @Input() popularity: boolean; 
    @Input() actuality: boolean; 
    constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

    async close(){
        await this.modalCtrl.dismiss({
            routes_filter: this.routes_filter, 
            routetypes:this.routetypes,
            length_sel:this.length_sel,
            difficulty_sel:this.difficulty_sel,
            popularity: this.popularity,
            actuality: this.actuality
        });
    }
    filter_types: any = [];
    selectType(type) {
        var checked = false;
        var type = this.routetypes[type].title;
        
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
            var set = this.routes.filter(function (value, index, arr) { return value.route_type == element; });
            set.forEach(item => {
                newSet.push(item);
            });
        });


        if (this.filter_types.length > 0) {
            this.routes_filter = newSet;
        }
        else {
            this.routes_filter = this.routes;
        }
    }
    asc(sortby:string){
        if(sortby == 'length') this.length_sel = '2';
        if(sortby == 'difficulty') this.difficulty_sel = '1';
        if(sortby == 'length'){
            this.routes_filter.sort((a,b) => a.length ? a.length.localeCompare(b.length): -1);
        } 
        if(sortby == 'difficulty'){
            this.routes_filter.sort((a,b) => a.difficulty ? a.difficulty.localeCompare(b.difficulty): -1);
        } 
        if(sortby == 'created_at'){
            this.routes_filter.sort((a,b) => a.created_at ? a.created_at.localeCompare(b.created_at): -1);
        } 
    }
    dsc(sortby:string){
        if(sortby == 'length') this.length_sel = '1';
        if(sortby == 'difficulty') this.difficulty_sel = '2';

        if(sortby == 'length'){
            this.routes_filter.sort((b,a) => a.length ? a.length.localeCompare(b.length): -1);
        } 
        if(sortby == 'difficulty'){
            this.routes_filter.sort((b,a) => a.difficulty ? a.difficulty.localeCompare(b.difficulty): -1);
        } 
        if(sortby == 'created_at'){
            this.routes_filter.sort((b,a) => a.created_at ? a.created_at.localeCompare(b.created_at): -1);
        } 
    }
}
