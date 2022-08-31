import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title/page-title.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { CardSocialComponent } from './card-social/card-social.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LineTimeComponent } from './line-time/line-time.component';
import { ModalComponent } from './modal-directorio/modal.component';
import { ModalAgregaruserComponent } from './modal-agregaruser/modal-agregaruser.component';
import { ModalAgregarhistoriaComponent } from './modal-agregarhistoria/modal-agregarhistoria.component';
import { ModalAgregarmarcaComponent } from './modal-agregarmarca/modal-agregarmarca.component';
import { ModalHistoriaComponent } from './modal-historia/modal-historia.component';
import { ModalMarcaComponent } from './modal-marca/modal-marca.component';





@NgModule({
  declarations: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent,
    LineTimeComponent,
    ModalComponent,
    ModalAgregaruserComponent,
    ModalAgregarhistoriaComponent,
    ModalAgregarmarcaComponent,
    ModalHistoriaComponent,
    ModalMarcaComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PageTitleComponent,
    SimpleCardComponent,
    CardSocialComponent,
    UserProfileComponent,
    LineTimeComponent,
    ModalComponent,
    ModalAgregaruserComponent,
    ModalAgregarhistoriaComponent,
    ModalAgregarmarcaComponent,
    ModalHistoriaComponent,
    ModalMarcaComponent
  ]
})
export class ComponentsModule { }
