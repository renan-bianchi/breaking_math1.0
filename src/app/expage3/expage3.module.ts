import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Expage3PageRoutingModule } from './expage3-routing.module';

import { Expage3Page } from './expage3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Expage3PageRoutingModule
  ],
  declarations: [Expage3Page]
})
export class Expage3PageModule {}
