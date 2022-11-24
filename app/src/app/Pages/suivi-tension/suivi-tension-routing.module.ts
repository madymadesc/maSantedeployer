import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviTensionPage } from './suivi-tension.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviTensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviTensionPageRoutingModule {}
