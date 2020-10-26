import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
    @Input() post_id: any;
    @Input() gids: any;

    constructor(private modalCtrl: ModalController, private db: DatabaseService, private router:Router) { }
   
    user_id: string = localStorage.getItem('user_id'); 
    user_name: string = localStorage.getItem('name'); 
    user_email: string = localStorage.getItem('email');
    user_phone: string;
    gid_id: number;

    ngOnInit() {
        console.log(this.user_name);
    }
  
    changeName($event) {
        this.user_name = $event.target.value;
    }
    changeEmail($event) {
        this.user_email = $event.target.value;
    }
    changePhone($event) {
        this.user_phone = $event.target.value;
    }
    checkGid(number){
        this.gid_id = number;
    }
    addOrder(){
        if(+this.user_id > 100000) this.user_id = '';
        this.db.addorder(this.post_id, this.gid_id, this.user_id, this.user_name, this.user_phone, this.user_email)
            .subscribe(
                response => {
                    this.modalCtrl.dismiss();
                    this.redirectTo();
                },
                error => console.log(error),
            );
    }
    redirectTo(){
        if(this.user_id){
            this.router.navigate(['/account']);
        }
        else this.router.navigate(['/home']);
    }
    async close(){
        await this.modalCtrl.dismiss();
    }
}
