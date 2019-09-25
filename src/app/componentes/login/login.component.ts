import { Component, OnInit } from '@angular/core';
import { UserCrud } from 'src/app/crud/UserCrud';
import { User } from 'src/app/models/User';
import { FirebaseService } from 'src/app/services/FirebaseService';
import { FireAuthService } from 'src/app/services/FireAuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }
  LogIn()
  {
    let user = new User("franco", "mail@francocanevali.com", "username", "password");
  }
}
