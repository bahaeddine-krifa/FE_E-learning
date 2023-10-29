import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Condidat } from '../shared/models/condidat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincondidatService {
  baseUrl= "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  loginCondidat(condidat: Condidat):Observable<Object> {
    const result =  this.httpClient.post(`${this.baseUrl}/loginCondidat`,condidat);
    console.log('resultat',result);
    return result;
  }

  public getCondidat(): Observable<Condidat[]> {
    return this.httpClient.get<Condidat[]>(`${this.baseUrl}/allCondidat`);
  }

  public addCondidat(condidat: Condidat): Observable<Condidat> {
    return this.httpClient.post<Condidat>(`${this.baseUrl}/addCondidat`,condidat);
  }

  public deleteCondidat(condidatId: Number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/deleteCondidat/${condidatId}`);
  }

  public updateCondidat(condidat: Condidat): Observable<Condidat> {
    return this.httpClient.put<Condidat>(`${this.baseUrl}/updateCondidat`,condidat);
  }

  login() : Promise<any>{
    return new Promise((resolve) => {
      localStorage.setItem('loggedInApp', 'true');
      resolve(true);
    })
  }
  
  isLoggedIn() : boolean{
    return !!localStorage.getItem('loggedInApp');
  }
}
