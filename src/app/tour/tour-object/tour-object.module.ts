import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourObjectPageRoutingModule } from './tour-object-routing.module';

import { TourObjectPage } from './tour-object.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourObjectPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbds-0Yca9LcT4I_AVnkg3u4LHo3lsSA0'
    }),
  ],
  declarations: [TourObjectPage]
})
export class TourObjectPageModule {}
