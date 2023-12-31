import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  {
    path: 'expage1',
    loadChildren: () => import('./expage1/expage1.module').then( m => m.Expage1PageModule)
  },
  {
    path: 'expage2',
    loadChildren: () => import('./expage2/expage2.module').then( m => m.Expage2PageModule)
  },
  {
    path: 'expage3',
    loadChildren: () => import('./expage3/expage3.module').then( m => m.Expage3PageModule)
  },
  {
    path: 'expage4',
    loadChildren: () => import('./expage4/expage4.module').then( m => m.Expage4PageModule)
  },
  {
    path: 'expage5',
    loadChildren: () => import('./expage5/expage5.module').then( m => m.Expage5PageModule)
  },
  {
    path: 'expage-result',
    loadChildren: () => import('./expage-result/expage-result.module').then( m => m.ExpageResultPageModule)
  },
  {
    path: 'expage-exemple-geometry',
    loadChildren: () => import('./expage-exemple-geometry/expage-exemple-geometry.module').then( m => m.ExpageExempleGeometryPageModule)
  },
  {
    path: 'expage-exemple-algeb',
    loadChildren: () => import('./expage-exemple-algeb/expage-exemple-algeb.module').then( m => m.ExpageExempleAlgebPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
