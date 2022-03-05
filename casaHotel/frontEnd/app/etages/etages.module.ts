import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtagesPageRoutingModule } from './etages-routing.module';

import { EtagesPage } from './etages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtagesPageRoutingModule
  ],
  declarations: [EtagesPage]
})
export class EtagesPageModule {}
