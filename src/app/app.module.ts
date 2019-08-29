import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/blocks/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContainerComponent } from './components/blocks/container/container.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from '../app/services/FirebaseService';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ContainerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
