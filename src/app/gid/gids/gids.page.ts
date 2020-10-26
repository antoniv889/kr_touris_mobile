import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-gids',
    templateUrl: './gids.page.html',
    styleUrls: ['./gids.page.scss'],
})
export class GidsPage implements OnInit {
    constructor(private dataService: DatabaseService) {
    }
    gids: any = [];
    ngOnInit() {
        this.getGids();
    }
    getGids() {
        this.dataService.getGids().subscribe(res => {
            this.gids = res;
        })
    }
}
