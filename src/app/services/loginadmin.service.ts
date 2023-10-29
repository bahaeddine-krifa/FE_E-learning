import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrateur } from '../shared/models/administrateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginadminService {
  baseUrl= "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  loginAdmin(administrateur: Administrateur):Observable<Object> {
    const result =  this.httpClient.post(`${this.baseUrl}/loginAdmin`,administrateur);
    console.log('resultat',result);
    return result;
  }

  login() : Promise<any>{
    return new Promise((resolve) => {
      localStorage.setItem('loggedInApp1', 'true');
      resolve(true);
    })
  }
  
  isLoggedIn() : boolean{
    return !!localStorage.getItem('loggedInApp1');
  }
}
