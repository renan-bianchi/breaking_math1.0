import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicioDeInteirosPageRoutingModule } from './exercicio-de-inteiros-routing.module';

import { ExercicioDeInteirosPage } from './exercicio-de-inteiros.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicioDeInteirosPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ExercicioDeInteirosPage]
})
export class ExercicioDeInteirosPageModule {}
