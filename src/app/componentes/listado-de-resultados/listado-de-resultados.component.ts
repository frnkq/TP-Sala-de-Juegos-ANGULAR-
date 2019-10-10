
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit
{
  @Input()
  listado: Array<any>;
  filteredListado;
  isFiltered;
  listOfUsers = new Array<any>();
  listOfGames = new Array<any>();
  userSelect: FormControl = new FormControl();
  gameSelect: FormControl = new FormControl();
  constructor()
  {
  }

  ngOnInit()
  {
    let that = this;
    let users = [];
    let games = [];
    this.listado.forEach(entry => { users.push(entry.user) });
    this.listado.forEach(entry => { games.push(entry.game) });

    this.listOfUsers = users.filter((item, index, self) =>
    {
      return self.indexOf(item) === index;
    });

    this.listOfGames = games.filter((item, index, self) =>
    {
      return self.indexOf(item) === index;
    });

    console.log(this.listOfUsers);
  }

  FilterListado(username: string=null, game: string=null)
  {
    this.isFiltered = true;
    if(username==="all" && game==="all")
    {
      this.isFiltered = false;
      return this.listado;
    }
    console.log("filtering by", {username: username, game: game});
      //return this.listado.filter(entry => { return entry.user == username })
      return this.listado.filter(entry => {
        if((username === "all" || username == null))
          if(game === "all" || game == null)
            return true;
          else
            return entry.game == game;
        else
          if(game === "all" || game == null)
            return entry.user == username;
          else
            return entry.user == username && entry.game == game;
      })
  }

  ApplyFilter()
  {
    let user = this.userSelect.value;
    let game = this.gameSelect.value;
    this.filteredListado = this.FilterListado(user, game);
  }

}
