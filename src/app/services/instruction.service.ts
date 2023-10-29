import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instruction } from '../shared/models/instruction';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  baseUrl= "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getInstruction(objectifId: Number): Observable<Instruction[]> {
    return this.httpClient.get<Instruction[]>(`${this.baseUrl}/instructions/${objectifId}`);
  }
}
