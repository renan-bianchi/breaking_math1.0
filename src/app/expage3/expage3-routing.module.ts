import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Expage3Page } from './expage3.page';

const routes: Routes = [
  {
    path: '',
    component: Expage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Expage3PageRoutingModule {}
