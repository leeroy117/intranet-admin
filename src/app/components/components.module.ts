import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { CardSocialComponent } from './card-social/card-social.component';
import { UserProfileComponent } from './user-profile/user-profile.component';





@NgModule({
  declarations: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent
  ]
})
export class ComponentsModule { }
