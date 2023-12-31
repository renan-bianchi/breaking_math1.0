import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Expage4PageRoutingModule } from './expage4-routing.module';

import { Expage4Page } from './expage4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Expage4PageRoutingModule
  ],
  declarations: [Expage4Page]
})
export class Expage4PageModule {}
