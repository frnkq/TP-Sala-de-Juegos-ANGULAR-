import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User'
import { FirebaseService } from '../../../services/FirebaseService';
import { AngularFirestore } from '@angular/fire/firestore';
import { ROUTE_URL } from '../../../Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public routes = ROUTE_URL;
  private _user:User; //o token
  public usernameInput:string;
  public passwordInput:string;
  private firebase:FirebaseService;

  constructor(private router:Router,private firestore: AngularFirestore, firebase:FirebaseService) { 
    this.firebase = new FirebaseService(firestore);
  }

  ngOnInit() {
  }

  public LogIn() :void
  {
  }

  public CreateUser() :void
  {
  }
}
