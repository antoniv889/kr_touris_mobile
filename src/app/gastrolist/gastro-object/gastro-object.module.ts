import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastroObjectPageRoutingModule } from './gastro-object-routing.module';

import { GastroObjectPage } from './gastro-object.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastroObjectPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbds-0Yca9LcT4I_AVnkg3u4LHo3lsSA0'
    }),
  ],
  declarations: [GastroObjectPage]
})
export class GastroObjectPageModule {}
