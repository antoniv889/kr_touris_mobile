import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GidprofilePage } from './gidprofile.page';

const routes: Routes = [
  {
    path: '',
    component: GidprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GidprofilePageRoutingModule {}
