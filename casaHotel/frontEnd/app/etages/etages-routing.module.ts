import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtagesPage } from './etages.page';

const routes: Routes = [
  {
    path: '',
    component: EtagesPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtagesPageRoutingModule {}
