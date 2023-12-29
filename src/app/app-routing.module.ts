import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercicio-de-inteiros',
    loadChildren: () => import('./exercicio-de-inteiros/exercicio-de-inteiros.module').then( m => m.ExercicioDeInteirosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
