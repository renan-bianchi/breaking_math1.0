import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Expage2Page } from './expage2.page';

const routes: Routes = [
  {
    path: '',
    component: Expage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Expage2PageRoutingModule {}
