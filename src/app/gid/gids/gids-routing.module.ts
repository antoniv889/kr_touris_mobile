import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GidsPage } from './gids.page';

const routes: Routes = [
  {
    path: '',
    component: GidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GidsPageRoutingModule {}
