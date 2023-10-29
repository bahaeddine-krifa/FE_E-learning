import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListchapitreComponent } from './listchapitre/listchapitre.component';
import { ListcondidatComponent } from './listcondidat/listcondidat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListobjectifComponent } from './listobjectif/listobjectif.component';
import { ListinstructionComponent } from './listinstruction/listinstruction.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'listchapitre', component: ListchapitreComponent },
      { path: 'listcondidat', component: ListcondidatComponent },
      {path:'listobjectif/:id', component:ListobjectifComponent},
      {path:'listinstruction/:id', component:ListinstructionComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
      

}
