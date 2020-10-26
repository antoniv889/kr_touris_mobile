import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesCategoriesPageRoutingModule } from './routes-categories-routing.module';

import { RoutesCategoriesPage } from './routes-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesCategoriesPageRoutingModule
  ],
  declarations: [RoutesCategoriesPage]
})
export class RoutesCategoriesPageModule {}
