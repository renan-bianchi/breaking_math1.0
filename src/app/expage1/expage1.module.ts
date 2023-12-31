import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Expage1PageRoutingModule } from './expage1-routing.module';

import { Expage1Page } from './expage1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Expage1PageRoutingModule
  ],
  declarations: [Expage1Page]
})
export class Expage1PageModule {}
