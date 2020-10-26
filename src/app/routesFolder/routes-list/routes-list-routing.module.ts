import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesListPage } from './routes-list.page';

const routes: Routes = [
  {
    path: '',
    component: RoutesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesListPageRoutingModule {}
