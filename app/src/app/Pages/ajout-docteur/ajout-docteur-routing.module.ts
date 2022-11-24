import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutDocteurPage } from './ajout-docteur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutDocteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutDocteurPageRoutingModule {}
