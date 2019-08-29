import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  private _isLoggedIn:boolean;
  get isLoggedIn()
  {
    if(localStorage.getItem("user") == null)
    {
      this._isLoggedIn = false;
    }
    else
    {
      this._isLoggedIn = true;
    }
    return this._isLoggedIn;
  }

  get username()
  {
    if(this.isLoggedIn)
      return localStorage.getItem("user");
  }

  constructor() { 
    this._isLoggedIn = false;
  }

  ngOnInit() {
  }

}
