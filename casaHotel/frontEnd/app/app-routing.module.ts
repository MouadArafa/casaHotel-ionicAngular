import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'etageinfo',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'etages',
    loadChildren: () => import('./etages/etages.module').then( m => m.EtagesPageModule)
  },
  {
    path: 'etages/:id',
    loadChildren: () => import('./etages/etages.module').then( m => m.EtagesPageModule)
  },
  {
    path: 'etageinfo',
    loadChildren: () => import('./etageinfo/etageinfo.module').then( m => m.EtageinfoPageModule)
  },
  {
    path: 'etageinfo/:id',
    loadChildren: () => import('./etageinfo/etageinfo.module').then( m => m.EtageinfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
