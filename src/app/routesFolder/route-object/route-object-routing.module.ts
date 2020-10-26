import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteObjectPage } from './route-object.page';

const routes: Routes = [
  {
    path: '',
    component: RouteObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteObjectPageRoutingModule {}
