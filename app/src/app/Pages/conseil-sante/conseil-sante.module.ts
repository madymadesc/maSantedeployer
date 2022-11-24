import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConseilSantePageRoutingModule } from './conseil-sante-routing.module';

import { ConseilSantePage } from './conseil-sante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConseilSantePageRoutingModule
  ],
  declarations: [ConseilSantePage]
})
export class ConseilSantePageModule {}
