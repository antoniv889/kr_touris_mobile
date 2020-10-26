import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-eventssettings',
  templateUrl: './eventssettings.component.html',
  styleUrls: ['./eventssettings.component.scss'],
})
export class EventssettingsComponent implements OnInit {
    @Input() events_filter: any;
    @Input() events: any;
    @Input() sel: string;

    constructor(private modalCtrl: ModalController, public datepipe: DatePipe) { }
    ngOnInit() { }

    async close(){
        await this.modalCtrl.dismiss({events_filter: this.events_filter, sel:this.sel});
    }
    asc(selected){
        this.sel = selected;
        this.events.sort((a,b) => {
            let date1 = this.datepipe.transform(new Date(b.created_at),'dd-MM-yyyy');
            let date2 = this.datepipe.transform(new Date(a.created_at),'dd-MM-yyyy');
            return <any>new Date(date1) - <any>new Date(date2);
        });
    }
    dsc(selected){
        this.sel = selected;
        this.events.sort((a,b) => {
            let date1 = this.datepipe.transform(new Date(b.date),'dd-MM-yyyy');
            let date2 = this.datepipe.transform(new Date(a.date),'dd-MM-yyyy');
            return <any>new Date(date1) - <any>new Date(date2);
        });
    }
}
