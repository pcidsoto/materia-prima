import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//dependencias angular - mdboostrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';

// modulo de fomularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

// import firebase angular
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // nos permitira trabajar con firebase
    AngularFireAuthModule // nos permitira trabajar con las autenticaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
