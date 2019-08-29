import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/User';
import { UserCrud } from '../../../crud/UserCrud';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private router:Router, firestore:AngularFirestore, private formBuilder: FormBuilder) { 
    this._userCrud = new UserCrud(firestore);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose(
        [
          Validators.minLength(6),
          Validators.required
        ])],
        surname: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required
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
      console.log("registrando....");
      return true;
      //this._user = new User(this.nameInput, this.surnameInput, this.usernameInput, this.passwordInput);
      //this.UserCrud.Register(this._user);
    }
    else
    {
      console.log("form incorrecto");
      return false;
    }

  }
}
