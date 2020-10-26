import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastroPageRoutingModule } from './gastro-routing.module';

import { GastroPage } from './gastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastroPageRoutingModule
  ],
  declarations: [GastroPage]
})
export class GastroPageModule {}
