import { Component, OnInit } from '@angular/core';
import { UserCrud } from 'src/app/crud/UserCrud';
import { User } from 'src/app/models/User';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FireauthService } from 'src/app/services/fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userCrud: UserCrud;
  constructor(private firestore: FirestoreService, private fireauth: FireauthService) { 
   this.userCrud = new UserCrud(firestore, fireauth); 
  }

  ngOnInit() {
  }
  LogIn()
  {
  }
}
