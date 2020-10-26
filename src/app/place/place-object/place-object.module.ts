import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceObjectPageRoutingModule } from './place-object-routing.module';

import { PlaceObjectPage } from './place-object.page';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceObjectPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbds-0Yca9LcT4I_AVnkg3u4LHo3lsSA0'
    }),
    AgmDirectionModule,
  ],
  declarations: [PlaceObjectPage]
})
export class PlaceObjectPageModule {}
