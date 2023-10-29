import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginadminService } from '../services/loginadmin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrateur } from '../shared/models/administrateur';

@Component({
  selector: 'app-loginprof',
  templateUrl: './loginprof.component.html',
  styleUrls: ['./loginprof.component.scss']
})
export class LoginprofComponent implements OnInit {

  hide: boolean = true;
  admin: Administrateur = new Administrateur();
  showError_login = false;
  redirectUrl: any = '';

  constructor(private fb: FormBuilder , public dialog: MatDialog, private loginadminserice: LoginadminService,private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.redirectUrl = this.activatedroute.snapshot.queryParamMap.get('redirectUrl') || '/admin/acceuil';

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

  adminLogin() {
    this.loginadminserice.loginAdmin(this.admin).subscribe(data=>{
      this.loginadminserice.login().then(() => {
        this.router.navigateByUrl(this.redirectUrl);
      })
      
    },error=>{
      this.showError_login= true;
      setTimeout(() => {
        this.showError_login= false;
      }, 2000);
    });
  }

}
