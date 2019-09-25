import { Component, OnInit } from '@angular/core';


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
  constructor() { 
    this.user = localStorage.getItem("user");
    if(this.user != null)
    {
      this.isLoggedIn = true;
    }
   }

  ngOnInit() {
  }

 

}
