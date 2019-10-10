import { Component, OnInit, Output } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Output() listado: any[];
  constructor(private userService:LocalStorageService) {
  }
  
  ngOnInit() {
    this.listado = this.RefactorListado(this.userService.GetScores());
    console.log(this.listado);
    }

  RefactorListado(listado)
  {
    let newListado = [];
    listado.forEach(item=>{
      let entry = {
        user: item.user,
        game: "Adivina el numero",
        score: item.scores.adivinaElNumero
      }
      if(entry.score != 0) newListado.push(entry);

      entry = {
        user: item.user,
        game: "Agilidad aritmética",
        score: item.scores.agilidad
      }
      if(entry.score != 0) newListado.push(entry);

      entry = {
        user: item.user,
        game: "Dedos rápidos",
        score: item.scores.dedosRapidos
      }
      if(entry.score != 0) newListado.push(entry);

      entry = {
        user: item.user,
        game: "Piedra papel o tijera",
        score: item.scores.piedraPapelTijera
      }
      if(entry.score != 0) newListado.push(entry);

      entry = {
        user: item.user,
        game: "Ta Te Ti",
        score: item.scores.taTeTi
      }
      if(entry.score != 0) newListado.push(entry);
    })

    return newListado;
  }

}
