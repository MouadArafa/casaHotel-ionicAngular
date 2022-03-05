import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtageinfoPageRoutingModule } from './etageinfo-routing.module';

import { EtageinfoPage } from './etageinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtageinfoPageRoutingModule
  ],
  declarations: [EtageinfoPage]
})
export class EtageinfoPageModule {}
