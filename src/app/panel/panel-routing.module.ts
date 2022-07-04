import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorioComponent } from '../@pages/directorio/directorio.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'directorio',
        loadChildren: () => import('../@pages/directorio/directorio.module').then(m => m.DirectorioModule)
      },
      {
        path: 'marcas',
        loadChildren: () => import('../@pages/marcas/marcas.module').then(m => m.MarcasModule)
      },
      {
        path: 'historia',
        loadChildren: () => import('../@pages/historia/historia.module').then(m => m.HistoriaModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
