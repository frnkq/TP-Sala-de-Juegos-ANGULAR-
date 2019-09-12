import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-fast-fingers',
  templateUrl: './fast-fingers.component.html',
  styleUrls: ['./fast-fingers.component.scss']
})
export class FastFingersComponent implements OnInit {
  words: String[];
  activeWord: String;

  constructor() {
    this.words = ["Hola", "Como", "Va"];
  }

  ngOnInit() {
  }

  Play()
  {
    this.GetRandomWord();
  }

  GetRandomWord()
  {
    this.activeWord = this.words[Math.random() * (this.words.length - 0)];
  } 
}

