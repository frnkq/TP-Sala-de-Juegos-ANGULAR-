import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public email;
  constructor() {
    this.email = localStorage.getItem("email");
   }

  ngOnInit() {
  }

}
