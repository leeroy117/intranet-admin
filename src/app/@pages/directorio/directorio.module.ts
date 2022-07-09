import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { DirectorioComponent } from './directorio.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    DirectorioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectorioRoutingModule
  ]
})
export class DirectorioModule { }
