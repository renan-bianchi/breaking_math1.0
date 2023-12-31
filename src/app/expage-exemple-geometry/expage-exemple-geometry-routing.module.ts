import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpageExempleGeometryPage } from './expage-exemple-geometry.page';

const routes: Routes = [
  {
    path: '',
    component: ExpageExempleGeometryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpageExempleGeometryPageRoutingModule {}
