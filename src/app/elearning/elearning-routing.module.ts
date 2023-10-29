import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElearningComponent } from './elearning.component';
import { ChapitreComponent } from './chapitre/chapitre.component';

const routes: Routes = [{ path: '', component: ElearningComponent,children:[
  {path:'chapitre', component:ChapitreComponent}
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElearningRoutingModule { }
