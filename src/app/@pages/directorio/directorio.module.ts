import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { DirectorioComponent } from './directorio.component';


@NgModule({
  declarations: [
    DirectorioComponent
  ],
  imports: [
    CommonModule,
    DirectorioRoutingModule
  ]
})
export class DirectorioModule { }
