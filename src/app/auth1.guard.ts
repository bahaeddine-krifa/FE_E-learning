import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginadminService } from './services/loginadmin.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  constructor(private loginadminserice: LoginadminService,private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.loginadminserice.isLoggedIn()) {
        this.router.navigate(['/loginadmin'], { queryParams: { redirectUrl: state.url} });
        return false;
      }
      return true;
  }
  
}
