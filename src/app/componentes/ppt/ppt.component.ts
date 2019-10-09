import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  choices = ["piedra", "papel", "tijera"];
  userChoice;
  computerChoice;
  winner = null;

  constructor(private userService: LocalStorageService) { }

  ngOnInit() {
  }

  Choose(choice: string)
  {
    this.userChoice = choice;
  }

  Play()
  {
    this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];

    if(this.userChoice == "piedra")
    {
      if(this.computerChoice == "piedra")
        this.winner = "empate";
      
      if(this.computerChoice == "tijera")
        this.winner = "user";

      if(this.computerChoice == "papel")
        this.winner = "computer";
    }

    if(this.userChoice == "papel")
    {
      if(this.computerChoice == "piedra")
        this.winner = "user";
      
      if(this.computerChoice == "papel")
        this.winner = "empate";

      if(this.computerChoice == "tijera")
        this.winner = "computer";
    }

    if(this.userChoice == "tijera")
    {
      if(this.computerChoice == "piedra")
        this.winner = "computer";
      
      if(this.computerChoice == "papel")
        this.winner = "user";

      if(this.computerChoice == "tijera")
        this.winner = "empate";
    }

    if(this.winner == "user")
    {
      this.userService.UpdateUserScore('piedraPapelTijera', 1);
    }
    if(this.winner == "computer")
    {
      this.userService.UpdateUserScore('piedraPapelTijera', -1);
    }
  }
}
