import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { IUser } from 'src/app/models/IUser';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  isLoggedIn = false;
  user;
  constructor(private userService: LocalStorageService) { 
    this.user = this.userService.GetCurrentUser();
    if((this.user as IUser).email != "guest")
    {
      this.isLoggedIn = true;
    }
  }

  ngOnInit() {
  }

  HasLoggedIn()
  {
    this.isLoggedIn = true;
  }
 

}
