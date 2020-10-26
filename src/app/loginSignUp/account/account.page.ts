import { DatabaseService, } from '../../services/database.service';
import { StorageService } from '../../services/storage.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit{
    username:any;
    email:any;
    user_id:any;
    userLikes: any = [];
    role_id: any;
    account: any = [];
    ifGid = false;

    constructor(private db: DatabaseService, 
                private route: Router,
                private storageService: StorageService,
                private googlePlus: GooglePlus) {
     }
    
    ngOnInit() {
        this.username = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.user_id = localStorage.getItem('user_id');
        this.getRole();
    }
    getRole() {
        this.db.getUserRole(this.user_id).subscribe(res => {
            this.role_id = res;
            for(let i = 0; i < this.role_id.length; i++){
                if(this.role_id[i] == '2') this.ifGid = true;
            }
            this.getOrders();

        })
    }
    orders: any = [];

    getOrders(){
        if(this.ifGid == true){
            this.db.getGidOrders(this.user_id).subscribe(res => {
                this.orders = res;
                this.orders.reverse();
            })
        }
        else {
            this.db.getUserOrders(this.user_id).subscribe(res => {
                this.orders = res;
                this.orders.reverse();
            })
        }
    }
    logout() {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('email');
        this.googlePlus.logout();
        this.route.navigate(['/login']);
    }

    login() {
        this.route.navigateByUrl('/login');
    }

}
