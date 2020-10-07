import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //creando la instancia del formulario
  registerForm =  new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })


  constructor() { }

  ngOnInit(): void {
  }

  onRegister(){
    console.log("form->", this.registerForm.value);
  }
}
