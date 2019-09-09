import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/User';
import { UserCrud } from '../../../crud/UserCrud';
import { AngularFireAuth } from 'firebase/auth'
import { AngularFirestore } from 'firebase/firestore';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public submitAttempt: boolean;

  private _user:User;
  private _userCrud: UserCrud;

  public get UserCrud()
  {
    return this._userCrud;
  }

  constructor(private router:Router, 
    fireauth: AngularFireAuth,
    firestore:AngularFirestore, 
    private formBuilder: FormBuilder) { 
      this.submitAttempt = false;
    this._userCrud = new UserCrud(firestore, fireauth);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose(
        [
          Validators.minLength(6),
          Validators.required
        ])],
        email: ['', Validators.compose([
          Validators.minLength(6),
          Validators.email
        ])],
        username: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])],
        password: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])]
    });
  }

  public Register() :boolean
  {
    this.submitAttempt = true;
    if(this.registerForm.valid)
    {
      let inputs = this.registerForm.controls;
      console.log("registrando....");
      this._user = new User(inputs.name.value, inputs.email.value, inputs.username.value, inputs.password.value);
      this.UserCrud.Register(this._user);
      return true;
      //this._user = new User(this.nameInput, this.surnameInput, this.usernameInput, this.passwordInput);
      //thi  private firebase:FirebaseService;s.UserCrud.Register(this._user);
    }
    else
    {
      console.log("form incorrecto");
      return false;
    }

  }
}
