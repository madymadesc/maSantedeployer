import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RappelPageRoutingModule } from './rappel-routing.module';

import { RappelPage } from './rappel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RappelPageRoutingModule
  ],
  declarations: [RappelPage]
})
export class RappelPageModule {}
