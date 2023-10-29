import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapitre } from '../shared/models/chapitre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {
  baseUrl= "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getChapitre(): Observable<Chapitre[]> {
    return this.httpClient.get<Chapitre[]>(`${this.baseUrl}/allChapitre`);
  }

  public getChapitreById(positionId:Number): Observable<Chapitre> {
    return this.httpClient.get<Chapitre>(`${this.baseUrl}/findChapitre/${positionId}`);
  }

  public addChapitre(chapitre: Chapitre): Observable<Chapitre> {
    return this.httpClient.post<Chapitre>(`${this.baseUrl}/addChapitre`,chapitre);
  }

  public deleteChapitre(chapitreId: Number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/deleteChapitre/${chapitreId}`);
  }

  public updateChapitre(chapitre: Chapitre): Observable<Chapitre> {
    return this.httpClient.put<Chapitre>(`${this.baseUrl}/updateChapitre`,chapitre);
  }
}
