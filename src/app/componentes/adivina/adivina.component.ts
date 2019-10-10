import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  theNumber = 0;
  isGameStarted;
  isGameFinished;
  score;
  timeLeft;
  message = null;
  messageTimer = 2;
  userGuess;
  timerInterval;
  messagesFalta = ["Falta", "Muy pequeño", "Un poco mas...", "Sumale unos numeros", "Hmmm....no", "Ese no es"];
  messagesPasaste = ["Te pasaste", "Nooo...demasiado", "Estas muy lejos", "Menos...", "Hmmm....no", "Ese no es"];
  @ViewChildren("myInput") input: QueryList<ElementRef>;

  constructor(private userService: LocalStorageService) {
    this.score = 0;
    this.timeLeft = 60;
   }

  ngOnInit() {
  }

  StartGame()
  {
    this.isGameStarted = true;
    this._countDown();
    this.GetNewNumber()
  }

  Guess()
  {
    this.messageTimer = 5;
    if(this.userGuess == this.theNumber)
    {
      this.EndGame();
    }
    else
    {
      this.input.first.nativeElement.value = ""; 
      if(this.userGuess > this.theNumber)
        this.message = this.messagesPasaste[Math.floor(Math.random() * this.messagesPasaste.length)];
      else
        this.message = this.messagesFalta[Math.floor(Math.random() * this.messagesFalta.length)];

      let interval = setInterval(f=>{this.messageTimer--;if(this.messageTimer < 1){ clearInterval(interval); this.message = null;} }, 1000);
    }
  }

  GetNewNumber()
  {
    this.userGuess = null;
    this._getRandomNumber(); 
  }


  EndGame()
  {
    clearInterval(this.timerInterval);
    this.isGameStarted = false;
    this.isGameFinished = true;
    this.score = this.timeLeft;
    this.userService.UpdateUserScore('adivina', this.score);
  }

  _getRandomNumber()
  {
    this.theNumber = Math.floor(Math.random() * 100);
    console.log("thenumber: ", this.theNumber);
  }

  _countDown()
  {
    this.timerInterval = setInterval(f=>{
     this.timeLeft--;
     if(this.timeLeft < 1) 
     {
      clearInterval(this.timerInterval);
      this.EndGame();
     }
    }, 1000);
  }
}
