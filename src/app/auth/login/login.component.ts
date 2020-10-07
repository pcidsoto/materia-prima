import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authSvc: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const { email, password} = this.loginForm.value;
    try {
      //Hace la solicitud del usuario
      const user = await this.authSvc.login(email, password);
      if (user) {
        //redireccionar a home
        this.routes.navigate(['/home']);
      }
    }
    catch(error){
      console.log(error);
      
    }
    //console.log("form ->", this.loginForm.value);
  }

}
