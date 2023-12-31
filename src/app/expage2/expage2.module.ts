import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Expage2PageRoutingModule } from './expage2-routing.module';

import { Expage2Page } from './expage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Expage2PageRoutingModule
  ],
  declarations: [Expage2Page]
})
export class Expage2PageModule {}
