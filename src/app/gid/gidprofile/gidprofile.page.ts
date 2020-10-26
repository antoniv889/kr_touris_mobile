import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
    selector: 'app-gidprofile',
    templateUrl: './gidprofile.page.html',
    styleUrls: ['./gidprofile.page.scss'],
})
export class GidprofilePage implements OnInit {
    id: any;
    constructor(private activateRoute: ActivatedRoute, private dataService: DatabaseService) {
        this.id = activateRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.getGid();
    }
    gid: any = [];
    getGid() {
        this.dataService.getGid(this.id).subscribe(response => {
            this.gid = response[0];
        })
    }
}
