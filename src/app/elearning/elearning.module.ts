import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import { ElearningRoutingModule } from './elearning-routing.module';
import { ElearningComponent } from './elearning.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ElearningComponent,
    ChapitreComponent
  ],
  imports: [
    CommonModule,
    ElearningRoutingModule,
    MatNativeDateModule,
    FormsModule

  ]
  

})
export class ElearningModule { }
