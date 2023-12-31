import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpageResultPage } from './expage-result.page';

const routes: Routes = [
  {
    path: '',
    component: ExpageResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpageResultPageRoutingModule {}
