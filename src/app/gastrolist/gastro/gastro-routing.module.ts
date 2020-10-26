import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastroPage } from './gastro.page';

const routes: Routes = [
  {
    path: '',
    component: GastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastroPageRoutingModule {}
