import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    SimpleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    SimpleCardComponent
  ]
})
export class ComponentsModule { }
