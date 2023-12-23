import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicioDeInteirosPage } from './exercicio-de-inteiros.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicioDeInteirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicioDeInteirosPageRoutingModule {}
