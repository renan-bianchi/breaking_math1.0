import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpageExempleAlgebPage } from './expage-exemple-algeb.page';

const routes: Routes = [
  {
    path: '',
    component: ExpageExempleAlgebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpageExempleAlgebPageRoutingModule {}
