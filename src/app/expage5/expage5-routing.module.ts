import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Expage5Page } from './expage5.page';

const routes: Routes = [
  {
    path: '',
    component: Expage5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Expage5PageRoutingModule {}
