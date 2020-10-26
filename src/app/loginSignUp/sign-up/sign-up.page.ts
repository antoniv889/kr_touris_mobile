import { DatabaseService } from '../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage.service';

import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
 
  data: any;
  
  constructor(private db: DatabaseService, private route:Router, private authService: AuthService, private storageService: StorageService) { }
  
 
  ngOnInit() {
    // this.db.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.db.getUsers().subscribe(usr => {
    //       this.users = usr;
    //     })
    //   }
    // });
  } 
 
  // addUser(name:string) {
  //   this.db.addUser(name)
  //   .then(_ => {
  //     this.route.navigateByUrl('/account');
  //   });
  // }
  // async signup(){
  //   const { username, userpassword, userpassword2 } = this;
  //   if (userpassword!=userpassword2){
  //     alert("Паролі не співпадають");
  //   }
  //   try {
  //     const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@kr.com', userpassword);
  //     this.addUser(username);
	// 	} catch(error) {
	// 		console.dir(error)
	// 	}
  // }
  onSignUp(form: NgForm){
    this.authService.signup(form.value.username,form.value.email,form.value.password)
      .subscribe(
        response => {
          console.log(response);
          this.route.navigate(['/account']);
          this.authService.signin(form.value.email, form.value.password)
            .subscribe(
              response =>{
                this.data = response;
                localStorage.setItem('token',this.data.token);
                localStorage.setItem('name',this.data.user.name);
                localStorage.setItem('user_id',this.data.user.id);
              // addUser(){
              //   this.storageService.addUser(this.data.user.id,this.data.user.name).then(_ => {
              //     this.test = {};
              //   });
              // }
              },
              error => {
                console.log(error);
              }
          );
        },
        error => console.log(error),
      )
  }
}
