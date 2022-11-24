import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutDocteurPageRoutingModule } from './ajout-docteur-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AjoutDocteurPage } from './ajout-docteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutDocteurPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AjoutDocteurPage]
})
export class AjoutDocteurPageModule {}
