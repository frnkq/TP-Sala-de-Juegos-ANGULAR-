import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  isLoggedIn;
  constructor(private userService:LocalStorageService, private router: Router) {
    this.isLoggedIn = (localStorage.getItem("currentUser")) ? true : false;
   }

  ngOnInit() {
  }
  LogOut()
  {
    this.router.navigateByUrl("/");
    this.userService.LogOut();
  }
}
