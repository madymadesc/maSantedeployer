import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviDiabetePage } from './suivi-diabete.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviDiabetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviDiabetePageRoutingModule {}
