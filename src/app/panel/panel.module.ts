import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { SidebarComponent } from '../components/@core/sidebar/sidebar.component';
import { HeaderComponent } from '../components/@core/header/header.component';
import { FooterComponent } from '../components/@core/footer/footer.component';



@NgModule({
  declarations: [
    PanelComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
