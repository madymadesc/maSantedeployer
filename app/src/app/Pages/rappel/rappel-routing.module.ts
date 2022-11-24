import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RappelPage } from './rappel.page';

const routes: Routes = [
  {
    path: '',
    component: RappelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RappelPageRoutingModule {}
