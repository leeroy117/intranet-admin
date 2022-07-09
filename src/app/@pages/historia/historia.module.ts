import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriaRoutingModule } from './historia-routing.module';
import { HistoriaComponent } from './historia.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    HistoriaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HistoriaRoutingModule
  ]
})
export class HistoriaModule { }
