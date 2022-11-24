import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPatientPageRoutingModule } from './ajout-patient-routing.module';

import { AjoutPatientPage } from './ajout-patient.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPatientPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AjoutPatientPage]
})
export class AjoutPatientPageModule {}
