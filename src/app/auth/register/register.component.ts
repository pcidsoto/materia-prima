import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// importar metodos para conectar con firebase
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  //creando la instancia del formulario
  registerForm =  new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  //inyectamos el authservice
  constructor(private authSvc:AuthService, private routes: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const { email, password } = this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.routes.navigate(['/home']);
      }
    }catch(error){
      console.log(error);
    }
    
  }
}
