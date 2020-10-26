import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GidsPageRoutingModule } from './gids-routing.module';

import { GidsPage } from './gids.page';
import { StarRatingModule } from 'ionic5-star-rating';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GidsPageRoutingModule,
    StarRatingModule
  ],
  declarations: [GidsPage]
})
export class GidsPageModule {}
