import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesListPageRoutingModule } from './routes-list-routing.module';

import { RoutesListPage } from './routes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesListPageRoutingModule
  ],
  declarations: [RoutesListPage]
})
export class RoutesListPageModule {}
