import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpageExempleGeometryPageRoutingModule } from './expage-exemple-geometry-routing.module';

import { ExpageExempleGeometryPage } from './expage-exemple-geometry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpageExempleGeometryPageRoutingModule
  ],
  declarations: [ExpageExempleGeometryPage]
})
export class ExpageExempleGeometryPageModule {}
