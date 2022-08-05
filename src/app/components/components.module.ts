import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { CardSocialComponent } from './card-social/card-social.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LineTimeComponent } from './line-time/line-time.component';





@NgModule({
  declarations: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent,
    LineTimeComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent,
    LineTimeComponent
  ]
})
export class ComponentsModule { }
