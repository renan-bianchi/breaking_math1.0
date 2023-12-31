import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpageResultPageRoutingModule } from './expage-result-routing.module';

import { ExpageResultPage } from './expage-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpageResultPageRoutingModule
  ],
  declarations: [ExpageResultPage]
})
export class ExpageResultPageModule {}
