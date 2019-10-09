import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  private cells: string[] = [];
  private turn: string = 'X';
  private gameover = false;
  private winner = null;
  gameStarted = false;
  constructor(private userService: LocalStorageService) { }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'X';
    this.gameover = false;
    this.winner = null;
    this.gameStarted = true;
  }

  clickHandler(idx: number) {
    console.log(idx);
    if (!this.gameover) {
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
        if(this.winner == "X")
        {
          console.log("puntos para x");
          this.userService.UpdateUserScore('taTeTi', 1);

        }
        else if(this.winner == "O")
        {
          console.log("menos un punto para X");
          this.userService.UpdateUserScore('taTeTi', -1);
        }
        else //tie
        {
          console.log("empate, cero puntos");
        }
      }

    }
  }

  changeTurn() {
    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = this.cells[line[0]];
        return;
      }
    }

    let occupy = 0;
    this.cells.forEach((e) => { occupy += (e !== null ? 1 : 0) });
    if (occupy === 9) {
      console.log('empate');
      this.gameover = true;
      this.winner = 'empate';
    }
  }
}
