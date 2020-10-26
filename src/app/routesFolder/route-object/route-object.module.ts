import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteObjectPageRoutingModule } from './route-object-routing.module';

import { RouteObjectPage } from './route-object.page';
import { StarRatingModule } from 'ionic5-star-rating';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteObjectPageRoutingModule,
    StarRatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbds-0Yca9LcT4I_AVnkg3u4LHo3lsSA0'
    }),
    AgmDirectionModule,
  ],
  declarations: [RouteObjectPage]
})
export class RouteObjectPageModule {}
