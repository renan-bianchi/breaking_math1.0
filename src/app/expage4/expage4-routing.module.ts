import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Expage4Page } from './expage4.page';

const routes: Routes = [
  {
    path: '',
    component: Expage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Expage4PageRoutingModule {}
