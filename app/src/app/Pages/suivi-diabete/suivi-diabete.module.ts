import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviDiabetePageRoutingModule } from './suivi-diabete-routing.module';

import { SuiviDiabetePage } from './suivi-diabete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviDiabetePageRoutingModule
  ],
  declarations: [SuiviDiabetePage]
})
export class SuiviDiabetePageModule {}
