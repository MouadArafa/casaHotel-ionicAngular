import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtageinfoPage } from './etageinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EtageinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtageinfoPageRoutingModule {}
