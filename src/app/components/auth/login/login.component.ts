import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User'
import { FirebaseService } from '../../../services/FirebaseService';
import { FireAuthService } from '../../../services/FireAuthService';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ROUTE_URL } from '../../../Constants';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public routes = ROUTE_URL;
  private firebase: FirebaseService;
  private fireauthService: FireAuthService;

  loginForm: FormGroup;
  public submitAttempt: boolean;

  constructor(private router: Router,
    private firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
    firebase: FirebaseService,
    fireauthService: FireAuthService,
    private formBuilder: FormBuilder) {
    this.firebase = new FirebaseService(firestore);
    this.fireauthService = new FireAuthService(fireauth);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

    async LogIn() {
    this.submitAttempt = true;
    if(this.loginForm.valid)
    {
      let user = await this.fireauthService.LogIn(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
      console.log(user);      
      if(user != null)
      {
        localStorage.setItem("user", (user as firebase.User).uid);
        localStorage.setItem("email", (user as firebase.User).email);
        this.router.navigateByUrl("/welcome");
      }
    }
    else
    {
      console.log("form incorrecto");
    }
  }
}
