import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Expage5PageRoutingModule } from './expage5-routing.module';

import { Expage5Page } from './expage5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Expage5PageRoutingModule
  ],
  declarations: [Expage5Page]
})
export class Expage5PageModule {}
