import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objectif } from '../shared/models/objectif';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  baseUrl= "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getObjectif(chapitreId: Number): Observable<Objectif[]> {
    return this.httpClient.get<Objectif[]>(`${this.baseUrl}/objectifs/${chapitreId}`);
  }

  public addObjectif(objectif: Objectif): Observable<Objectif> {
    return this.httpClient.post<Objectif>(`${this.baseUrl}/addObjectif`,objectif);
  }

  public deleteObjectif(objectifId: Number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/deleteObjectif/${objectifId}`);
  }

  public updateObjectif(objectif: Objectif): Observable<Objectif> {
    return this.httpClient.put<Objectif>(`${this.baseUrl}/updateObjectif`,objectif);
  }
}
