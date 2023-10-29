import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogincondidatService } from 'src/app/services/logincondidat.service';
import { Condidat } from 'src/app/shared/models/condidat';

@Component({
  selector: 'app-listcondidat',
  templateUrl: './listcondidat.component.html',
  styleUrls: ['./listcondidat.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class ListcondidatComponent implements OnInit {
  public condidats!: Condidat[];
  public addCondidat!: Condidat;
  public editCondidat!: Condidat;
  public deleteCondidat!: Condidat;

  constructor(private logincondidatService: LogincondidatService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
		config.keyboard = false;
   }

  ngOnInit(): void {
    this.getCondidats();
  }
  open(content: any,condiat:Condidat, mode:String) {
		this.modalService.open(content);
    if(mode== 'edit') {
      this.editCondidat=condiat;
    }
    if(mode== 'delete') {
      this.deleteCondidat=condiat;
    }
	}

  public getCondidats(): void {
    this.logincondidatService.getCondidat().subscribe(
      (response: Condidat[]) => {
        this.condidats = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCondidat(addForm: NgForm): void {
    this.logincondidatService.addCondidat(addForm.value).subscribe(
      (response: Condidat) => {
        this.getCondidats();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCondidat(condidat: Condidat):void {
    this.logincondidatService.updateCondidat(condidat).subscribe(
      (response: Condidat) => {
        this.getCondidats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteCondidat(condidatId: number):void {
    this.logincondidatService.deleteCondidat(condidatId).subscribe(
      (response: void) => {
        this.getCondidats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 

}
