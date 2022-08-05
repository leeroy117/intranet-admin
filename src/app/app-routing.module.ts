import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorioComponent } from './@pages/directorio/directorio.component';
import { SesionService } from './services/sesion.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    //path: 'panel',canActivate:[SesionService],
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule),
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
