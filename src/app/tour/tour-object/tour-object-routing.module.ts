import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourObjectPage } from './tour-object.page';

const routes: Routes = [
  {
    path: '',
    component: TourObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourObjectPageRoutingModule {}
