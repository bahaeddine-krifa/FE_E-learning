import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  dashboardLetters: string[] = [];
  dashboardLetters$: Observable<string[]> | undefined;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dashboardLetters = 'Dashboard'.split('');
    this.dashboardLetters$ = this.getLettersStream(this.dashboardLetters);
  }
  getLettersStream(letters: string[]): Observable<string[]> {
    return new Observable(observer => {
      let index = 0;
      const showLetters = () => {
        if (index < letters.length) {
          observer.next(letters.slice(0, index + 1));
          index++;
          setTimeout(showLetters, 500);
        } else {
          setTimeout(() => {
            observer.next([]);
            index = 0;
            showLetters();
          }, 1500);
        }
      };
      showLetters();
    });
  }

  logout(){
    localStorage.removeItem('loggedInApp1');
    this.router.navigate(['/loginadmin']);
  }

  isActive(route: string): boolean {

    return this.router.url === route;
  }

  navigate(route: string): void {
    this.router.navigateByUrl(route);
    
  }
  
}
