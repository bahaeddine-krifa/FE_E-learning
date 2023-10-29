import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListcondidatComponent } from './listcondidat/listcondidat.component';
import { ListchapitreComponent } from './listchapitre/listchapitre.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcceuilComponent } from './acceuil/acceuil.component'
import { FormsModule } from '@angular/forms';
import { ListobjectifComponent } from './listobjectif/listobjectif.component';
import { ListinstructionComponent } from './listinstruction/listinstruction.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListcondidatComponent,
    ListchapitreComponent,
    AcceuilComponent,
    ListobjectifComponent,
    ListinstructionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class AdminModule { }
