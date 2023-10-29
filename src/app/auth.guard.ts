import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogincondidatService } from './services/logincondidat.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private logincondidatserice: LogincondidatService,private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.logincondidatserice.isLoggedIn()) {
        this.router.navigate(['/loginetudiant'], { queryParams: { redirectUrl: state.url} });
        return false;
      }
      return true;
  }
  
}
