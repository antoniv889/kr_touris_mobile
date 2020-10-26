import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { HttpClient } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    status: any;
    message: string;
    data: any;
    constructor(
        private googlePlus: GooglePlus,
        private fb: Facebook,
        private http: HttpClient,
        private db: DatabaseService,
        private authService: AuthService,
        private route: Router,
        private storageService: StorageService
    ) { }

    ngOnInit() { }


    onSignIn(form: NgForm) {
        this.authService.signin(form.value.email, form.value.password)
            .subscribe(
                response => {
                    this.message = '';
                    this.data = response;
                    console.log(this.data);
                    localStorage.setItem('token', this.data.token);
                    localStorage.setItem('name', this.data.user.name);
                    localStorage.setItem('user_id', this.data.user.id);
                    localStorage.setItem('email', this.data.user.email);
                    this.route.navigate(['/account']);
                },
                error => {
                    this.status = error.status;
                    if (this.status === 401) alert('Неправильний пароль або емейл');
                }
            )
    }

    googleLogin() {
        this.googlePlus.login({})
            .then(res => {
                this.db.add_googlefbuser(res.displayName, res.email).subscribe(response => {
                    console.log(response);
                    localStorage.setItem('name', response[0].name);
                    localStorage.setItem('email', response[0].email);
                    localStorage.setItem('user_id', response[0].id);
                })
                this.route.navigateByUrl('/account');
            }).catch(err => console.error(err));
    }
    userData: any;
    facebookLogin() {
        this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.fb.api('me?fields=id,name,email,first_name', []).then(profile => {
                this.userData = {email: profile['email'], first_name: profile['first_name'], username: profile['name']}
                console.log(this.userData);
                this.db.add_googlefbuser(this.userData.username, this.userData.email).subscribe(response => {
                    console.log(response);
                    localStorage.setItem('name', response[0].name);
                    localStorage.setItem('email', response[0].email);
                    localStorage.setItem('user_id', response[0].id);
                })
                this.route.navigateByUrl('/account');
            });
        });
    }
}

