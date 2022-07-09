import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { PanelModule } from 'src/app/panel/panel.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    MarcasComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MarcasRoutingModule,
  ]
})
export class MarcasModule { }
