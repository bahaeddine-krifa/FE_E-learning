import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ObjectifService } from 'src/app/services/objectif.service';
import { Objectif } from 'src/app/shared/models/objectif';

@Component({
  selector: 'app-listobjectif',
  templateUrl: './listobjectif.component.html',
  styleUrls: ['./listobjectif.component.scss']
})
export class ListobjectifComponent implements OnInit {
  public objectifs!: Objectif[];
  public addObjectif!:Objectif;
  public editObjectif!:Objectif;
  public deleteObjectif!:Objectif;
  public id1!:number;
  constructor(private route: ActivatedRoute ,private objectifService: ObjectifService,config: NgbModalConfig, private modalService: NgbModal) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id1 = params['id'];
      this.getObjectif(id1);

    })
    
  }


  public getObjectif(id:number): void{
    this.objectifService.getObjectif(id).subscribe(
      (response: Objectif[]) => {
        this.objectifs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
