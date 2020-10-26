import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventObjectPage } from './event-object.page';

const routes: Routes = [
  {
    path: '',
    component: EventObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventObjectPageRoutingModule {}
