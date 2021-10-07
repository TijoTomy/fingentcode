import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DashboardService} from '../../service/dashboard.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
invalidcred:string='';
  constructor(
    private formBuilder: FormBuilder,private coronadataservice:DashboardService,private  route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
    
  }
  checkinput(){
    this.invalidcred=""
  }
  submit() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    if(this.loginForm.value.email=="fingent"&&this.loginForm.value.password=="fingent"){
      this.route.navigateByUrl('/dashboard')
    }
    else{
      this.invalidcred="Invalid Username or Password"
    }
  }

}


