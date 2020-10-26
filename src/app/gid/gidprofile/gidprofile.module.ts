import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GidprofilePageRoutingModule } from './gidprofile-routing.module';

import { GidprofilePage } from './gidprofile.page';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GidprofilePageRoutingModule,
    StarRatingModule

  ],
  declarations: [GidprofilePage]
})
export class GidprofilePageModule {}
