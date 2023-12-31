import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Expage1Page } from './expage1.page';

const routes: Routes = [
  {
    path: '',
    component: Expage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Expage1PageRoutingModule {}
