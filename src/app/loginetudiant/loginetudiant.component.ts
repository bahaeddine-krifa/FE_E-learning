import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LogincondidatService } from '../services/logincondidat.service';
import { Condidat } from '../shared/models/condidat';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginetudiant',
  templateUrl: './loginetudiant.component.html',
  styleUrls: ['./loginetudiant.component.scss']
})
export class LoginetudiantComponent implements OnInit {
  
  hide: boolean = true;
  condidat:Condidat = new Condidat();
  showError_login = false;
  redirectUrl: any = '';

  constructor(private fb: FormBuilder , public dialog: MatDialog, private logincondidatserice: LogincondidatService,private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.redirectUrl = this.activatedroute.snapshot.queryParamMap.get('redirectUrl') || '/elearning';
  }

  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    
  }

  condidatLogin() {
    this.logincondidatserice.loginCondidat(this.condidat).subscribe(data=>{
      this.logincondidatserice.login().then(() => {
        this.router.navigateByUrl(this.redirectUrl);
        console.log(this.condidat);
      })
      
    },error=>{
      this.showError_login= true;
      setTimeout(() => {
        this.showError_login= false;
      }, 2000);
    });
    
  }

}
