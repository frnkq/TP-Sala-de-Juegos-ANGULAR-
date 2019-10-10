import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService:LocalStorageService) {
      this.isLoggedIn = (localStorage.getItem("currentUser")) ? true : false;
     }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'DedosRapidos':
          this.router.navigate(['/Juegos/DedosRapidos']);
        break;
      case 'PPT':
          this.router.navigate(['/Juegos/Ppt']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'taTeTi':
          this.router.navigate(['/Juegos/Tateti']);
        break;
    }
  }
  Logout()
  {
    this.userService.LogOut();
  }
}
