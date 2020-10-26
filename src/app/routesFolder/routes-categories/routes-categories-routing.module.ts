import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesCategoriesPage } from './routes-categories.page';

const routes: Routes = [
  {
    path: '',
    component: RoutesCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesCategoriesPageRoutingModule {}
