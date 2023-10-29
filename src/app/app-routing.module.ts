import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginprofComponent } from './loginprof/loginprof.component';
import { LoginetudiantComponent } from './loginetudiant/loginetudiant.component';
import { AuthGuard } from './auth.guard';
import { ElearningComponent } from './elearning/elearning.component';
import { AdminComponent } from './admin/admin.component';
import { Auth1Guard } from './auth1.guard';
import { ListchapitreComponent } from './admin/listchapitre/listchapitre.component';
import { ListcondidatComponent } from './admin/listcondidat/listcondidat.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { ListobjectifComponent } from './admin/listobjectif/listobjectif.component';
import { ListinstructionComponent } from './admin/listinstruction/listinstruction.component';
import { ChapitreComponent } from './elearning/chapitre/chapitre.component';

const routes: Routes = [
  { path: 'loginadmin', component: LoginprofComponent },
  { path: 'loginetudiant', component: LoginetudiantComponent },
  {path: 'elearning', component:ElearningComponent,canActivate:[AuthGuard],children:[
    {path:'chapitre', component:ChapitreComponent}
  ]},
  {path:'admin', component: AdminComponent,canActivate:[Auth1Guard],children:[
    { path: 'acceuil', component: AcceuilComponent },
      { path: 'listchapitre', component: ListchapitreComponent },
      { path: 'listcondidat', component: ListcondidatComponent },
      {path:'listobjectif/:id', component:ListobjectifComponent},
      {path:'listinstruction/:id', component:ListinstructionComponent}
  ]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'elearning', loadChildren: () => import('./elearning/elearning.module').then(m => m.ElearningModule) },
  {
    path:'' , redirectTo:'loginetudiant' , pathMatch:'full'
  },
  {
    path:'**', redirectTo:'loginetudiant'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
