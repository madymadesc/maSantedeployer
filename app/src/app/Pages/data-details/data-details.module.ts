import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataDetailsPageRoutingModule } from './data-details-routing.module';

import { DataDetailsPage } from './data-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataDetailsPageRoutingModule
  ],
  declarations: [DataDetailsPage]
})
export class DataDetailsPageModule {}
