import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataDetailsPage } from './data-details.page';

const routes: Routes = [
  {
    path: '',
    component: DataDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDetailsPageRoutingModule {}
