import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceObjectPage } from './place-object.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceObjectPageRoutingModule {}
