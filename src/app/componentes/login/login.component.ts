import { Component, OnInit } from '@angular/core';
import { UserCrud } from 'src/app/crud/UserCrud';
import { User } from 'src/app/models/User';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FireauthService } from 'src/app/services/fireauth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userCrud: UserCrud;
  loginForm: FormGroup;
  showSpinner = false;
  constructor(private firestore: FirestoreService, private fireauth: FireauthService) { 
   this.userCrud = new UserCrud(firestore, fireauth); 

  }

  ngOnInit() {
   this.loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });
  }
  LogIn()
  {

    let that = this;
    this.showSpinner = true;
    let controls = this.loginForm.controls;
    let email = controls.email.value;
    let password = controls.password.value;
    let result = this.fireauth.LogIn(email, password).then(function(userData){
      console.log("logging in...");
      console.log(userData);
    }).finally(function(){
      that.showSpinner = false;
    })
    console.log(result);
  }
}
