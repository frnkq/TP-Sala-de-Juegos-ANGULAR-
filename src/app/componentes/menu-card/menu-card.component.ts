import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'PPT':
        this.router.navigate(['/Juegos/Ppt']);
        break;
      case 'taTeTi':
        this.router.navigate(['/Juegos/Tateti']);
        break;
      case 'DedosRapidos':
        this.router.navigate(['/Juegos/DedosRapidos']);
        break;
    }
  }
}
