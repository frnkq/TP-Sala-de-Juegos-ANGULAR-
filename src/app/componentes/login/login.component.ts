import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserCrud } from 'src/app/crud/UserCrud';
import { User } from 'src/app/models/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
  registerForm: FormGroup;
  showSpinner = false;
  @Output() isLoggedIn: boolean;
  @Output() hasLoggedIn: EventEmitter<any>;
  constructor(private userService: LocalStorageService)
  {
    this.isLoggedIn = false;
    this.hasLoggedIn = new EventEmitter<any>();
  }

  ngOnInit()
  {
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

    this.registerForm = new FormGroup({
      emailRegister: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordRegister: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });



  }
  LogIn()
  {

    let that = this;
    let controls = this.loginForm.controls;
    let email = controls.email.value;
    let password = controls.password.value;

    this.isLoggedIn = this.userService.LogIn(email, password);
    this.hasLoggedIn.emit();
    let user = this.userService.GetCurrentUser();
  }

  Register()
  {
    let that = this;
    let controls = this.registerForm.controls;
    let email = controls.emailRegister.value;
    let password = controls.passwordRegister.value;

    this.userService.Register(email, password);

  }
}
