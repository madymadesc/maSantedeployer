import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutPatientPage } from './ajout-patient.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutPatientPageRoutingModule {}
