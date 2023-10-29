import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { InstructionService } from 'src/app/services/instruction.service';
import { Instruction } from 'src/app/shared/models/instruction';

@Component({
  selector: 'app-listinstruction',
  templateUrl: './listinstruction.component.html',
  styleUrls: ['./listinstruction.component.scss']
})
export class ListinstructionComponent implements OnInit {
  public instructions!: Instruction[];
  constructor(private route: ActivatedRoute,private instructionService: InstructionService,config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.getInstruction(id);

    })
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

}
