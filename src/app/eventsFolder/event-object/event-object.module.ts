import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventObjectPageRoutingModule } from './event-object-routing.module';

import { EventObjectPage } from './event-object.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventObjectPageRoutingModule
  ],
  declarations: [EventObjectPage]
})
export class EventObjectPageModule {}
