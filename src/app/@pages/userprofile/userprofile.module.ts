import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UserprofileRoutingModule
  ]
})
export class UserprofileModule { }
