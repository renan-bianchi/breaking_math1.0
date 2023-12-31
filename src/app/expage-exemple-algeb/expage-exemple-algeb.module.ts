import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpageExempleAlgebPageRoutingModule } from './expage-exemple-algeb-routing.module';

import { ExpageExempleAlgebPage } from './expage-exemple-algeb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpageExempleAlgebPageRoutingModule
  ],
  declarations: [ExpageExempleAlgebPage]
})
export class ExpageExempleAlgebPageModule {}
