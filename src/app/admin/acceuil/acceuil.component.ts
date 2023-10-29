import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  dashboardLetters: string[] = [];
  dashboardLetters$: Observable<string[]> | undefined;
  constructor() { }

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
}
