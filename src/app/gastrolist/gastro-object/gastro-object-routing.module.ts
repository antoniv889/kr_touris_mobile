import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastroObjectPage } from './gastro-object.page';

const routes: Routes = [
  {
    path: '',
    component: GastroObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastroObjectPageRoutingModule {}
