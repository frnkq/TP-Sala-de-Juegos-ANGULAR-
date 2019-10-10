import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css'],
})
export class PptComponent implements OnInit {
  choices = ["piedra", "papel", "tijera"];
  userChoice = "papel";
  computerChoice;
  winner = null;
  playingMsg: string=null;
  showingMsg = 0;
  constructor(private userService: LocalStorageService) { }

  ngOnInit() {
  }

  Choose(choice: string)
  {
    this.userChoice = choice;
  }

  PlayingMsgs()
  {
    let playingMsgs = ["Piedra", "Papel", "Tijera"]
    let showingMsg = 1;
    let interval = setInterval(()=>{
      this.playingMsg = playingMsgs[this.showingMsg];
      this.showingMsg++;
    console.log(this.playingMsg);
      if(this.showingMsg==4)
        clearInterval(interval);
    }, 500);

  }
  Play()
  {
    
    this.PlayingMsgs();
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
      this.winner = "Ganaste!"
      this.userService.UpdateUserScore('piedraPapelTijera', 1);
    }
    else if(this.winner == "computer")
    {
      this.winner = "Perdiste"
      this.userService.UpdateUserScore('piedraPapelTijera', -1);
    }
    else
    {
      this.winner = "Empate"
    }
  }
}
