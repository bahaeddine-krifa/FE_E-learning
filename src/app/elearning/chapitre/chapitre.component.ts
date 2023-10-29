import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { InstructionService } from 'src/app/services/instruction.service';
import { ObjectifService } from 'src/app/services/objectif.service';
import { Chapitre } from 'src/app/shared/models/chapitre';
import { Instruction } from 'src/app/shared/models/instruction';
import { Objectif } from 'src/app/shared/models/objectif';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss']
})
export class ChapitreComponent implements OnInit {
  public chapitres!:Chapitre[];
  public objectifs!: Objectif[];
  public instructions!: Instruction[];
  public chapitre!:Chapitre;
  isSuivantEnabled: boolean = false;
  progressPercentage: number = 0;
  testnb: number = 0;
  public idd :number=1;
  constructor(private chapitreService: ChapitreService,private objectifService: ObjectifService,private instructionService: InstructionService) { }
  ngOnInit(): void {
    this.getChapitreById(this.idd);
    this.getObjectifById(this.idd);
    this.getInstruction(1);
    
  }

  public getChapitreById(id:number):void{
    this.chapitreService.getChapitreById(id).subscribe(
      (response: Chapitre) => {
        this.chapitre = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getObjectifById(id:number):void{
    this.objectifService.getObjectif(id).subscribe(
      (response: Objectif[]) => {
        this.objectifs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getInstruction(id:number): void{
    this.instructionService.getInstruction(id).subscribe(
      (response: Instruction[]) => {
        this.instructions = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  updateSuivantButton() {
    const isAllResponsesJava = this.objectifs.every((objectif) => objectif.reponse.toLowerCase() === 'java');
    this.isSuivantEnabled = isAllResponsesJava && this.objectifs.length > 0;
  }
  

  onAjouterClick(reponse: string) {

    if (reponse.toLowerCase() === 'java') {
      this.testnb++

      if(this.testnb==3){
      this.updateSuivantButton();
      this.updateProgressPercentage();
      
      }
      Swal.fire({
        icon: 'success',
        title: 'Congratulation...',
        text: 'Reponse correct!',
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Reponse incorrect!',
      })
    }
  }
  updateProgressPercentage() {
    const totalObjectifs = this.objectifs.length;
    const completedObjectifs = totalObjectifs > 0 ? Math.min(totalObjectifs, 7) : 0;
    this.progressPercentage = (completedObjectifs / 7) * 100; // Assuming there are 7 total objectifs

  }
  next(){
    ++this.idd;
  this.getChapitreById(this.idd);
  this.getObjectifById(this.idd);
  }
  
}
