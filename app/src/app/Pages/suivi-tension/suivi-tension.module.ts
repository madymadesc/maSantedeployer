import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviTensionPageRoutingModule } from './suivi-tension-routing.module';

import { SuiviTensionPage } from './suivi-tension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviTensionPageRoutingModule
  ],
  declarations: [SuiviTensionPage]
})
export class SuiviTensionPageModule {}
