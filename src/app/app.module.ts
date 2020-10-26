import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GoogleMaps } from '@ionic-native/google-maps';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { OrderComponent } from './routesFolder/order/order.component';
import { SettingsComponent } from './routesFolder/settings/settings.component';
import { EventssettingsComponent } from './eventsFolder/eventssettings/eventssettings.component';
import {GastrosettingsComponent} from './gastroList/gastrosettings/gastrosettings.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [   AppComponent,
                    OrderComponent, 
                    SettingsComponent,
                    EventssettingsComponent, 
                    GastrosettingsComponent
                ],
entryComponents: [  
                    OrderComponent, 
                    SettingsComponent,
                    EventssettingsComponent,
                    GastrosettingsComponent
                 ],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule, 
            HttpClientModule,
            FormsModule, 
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    GooglePlus,
    Facebook,
    SQLite,
    SQLitePorter,
    DatePipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
