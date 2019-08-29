import { Component, OnInit } from '@angular/core';
import { ROUTE_URL } from '../../../Constants'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public routes = ROUTE_URL;
  constructor() { }

  ngOnInit() {
  }

}
