import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    navigate: any;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.sideMenu();
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Головна",
                    url: "/home",
                    icon: "home"
                },
                {
                    title: "Місця",
                    url: "/places",
                    icon: "pin-outline"
                },
                {
                    title: "Маршрути",
                    url: "/routes-categories",
                    icon: "navigate-sharp"
                },
                {
                    title: "Музеї",
                    url: "/places/14",
                    icon: "school-outline",
                },
                {
                    title: "Гіди",
                    url: "/gids",
                    icon: "people-outline",
                },
                {
                    title: "Гастро та готелі",
                    url: "/gastro",
                    icon: "restaurant-outline",
                },
                {
                    title: "Події",
                    url: "/events",
                    icon: "calendar-outline",
                },
                {
                    title: "Особистий кабінет",
                    url: "/account",
                    icon: "person-outline",
                },
            ]
    }
}
