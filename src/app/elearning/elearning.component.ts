import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.scss']
})
export class ElearningComponent implements OnInit {
  baha: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('loggedInApp');
    this.router.navigate(['/loginetudiant']);
  }

  hidden():void{
    this.baha=false;
  }
}
