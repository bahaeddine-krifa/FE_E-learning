import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChapitreService } from 'src/app/services/chapitre.service';
import { Chapitre } from 'src/app/shared/models/chapitre';

@Component({
  selector: 'app-listchapitre',
  templateUrl: './listchapitre.component.html',
  styleUrls: ['./listchapitre.component.scss']
})
export class ListchapitreComponent implements OnInit {
  public chapitres!: Chapitre[];
  public addChapitre!: Chapitre;
  public editChapitre!: Chapitre;
  public deleteChapitre!: Chapitre;

  constructor(private chapitreSerive: ChapitreService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getChapitres();
  }

  open(content: any,chapitre:Chapitre, mode:String) {
		this.modalService.open(content);
    if(mode== 'edit') {
      this.editChapitre=chapitre;
    }
    if(mode== 'delete') {
      this.deleteChapitre=chapitre;
    }
	}

  public getChapitres(): void{
    this.chapitreSerive.getChapitre().subscribe(
      (response: Chapitre[]) => {
        this.chapitres = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddChapitre(addForm: NgForm): void{
    this.chapitreSerive.addChapitre(addForm.value).subscribe(
      (response: Chapitre) =>{
        this.getChapitres();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onUpdateChapitre(chapitre:Chapitre): void {
    this.chapitreSerive.updateChapitre(chapitre).subscribe(
      (response: Chapitre) =>{
        this.getChapitres();
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  onDeleteChapitre(chapitreId: number) :void{
    this.chapitreSerive.deleteChapitre(chapitreId).subscribe(
      (response: void) => {
        this.getChapitres();
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

}
