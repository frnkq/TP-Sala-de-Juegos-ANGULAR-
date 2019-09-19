import { Component, OnInit, Output, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-game',
  templateUrl: './dedosrapidos.component.html',
  styleUrls: ['./dedosrapidos.component.scss']
})
export class DedosrapidosComponent implements OnInit, AfterViewInit {

  listOfWords: string[];
  @Output() currentWord: string;
  @Output() nextWord: string;
  @Input() stringWritten: string;
  @Output() timeLeft: number;
  score: number;
  isGameRunning: boolean;
  interval: any;
  wordsDontMatch: boolean;
  isGameFinished;
  @ViewChildren("myInput") textarea: QueryList<ElementRef>;

  //focus textarea on show
  ngAfterViewInit(): void {
    this.textarea.changes.subscribe((list: QueryList<ElementRef>) => {
      if (list.length > 0) {
        list.first.nativeElement.focus();
      }
    });
  }

  constructor(private http: HttpClient) {
    this.http.get('../../assets/words.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data));
    this.listOfWords = [];
    this.timeLeft = 60;
    this.score = 0;
    this.isGameRunning = false;
    this.wordsDontMatch = false;
    this.isGameFinished = false;
  }

  populateWordsArray(textFileContent) {
    for (const line of textFileContent.split(/[\r\n]+/)) {
      this.listOfWords.push(line);
    }
  }

  ngOnInit() {
  }

  checkAccuracy($event) {
    //principle of inocence
    this.wordsDontMatch = false;

    if (this.isGameRunning) {
      //flag as invalid when a character doesn't match
      for (let i = 0; i < this.stringWritten.length; i++) {
        if (this.stringWritten[i] != this.currentWord[i]) {
          this.wordsDontMatch = true;
        }
      }

      //correct word
      if ($event == this.currentWord) {
        this.score++;
        this.getNewWord();
        this.stringWritten = "";
        this.wordsDontMatch = false;
      }
    }
  }

  countDown() {
    var that = this;
    this.interval = setInterval(function (passTime) {
      if (that.timeLeft <= 1) {
        clearInterval(that.interval)
        that.endGame();
      }
      that.timeLeft--;
    }, 1000);
  }

  startGame() {
    this.isGameFinished = false;
    this.timeLeft = 60;
    this.score = 0;
    this.countDown();
    this.isGameRunning = true;
    this.getNewWord();
  }

  getNewWord() {
    this.currentWord = this.nextWord == undefined ? this.getRandomWord() : this.nextWord;
    this.nextWord = this.getRandomWord();
  }

  getRandomWord() {
    let random = Math.floor(Math.random() * (this.listOfWords.length - 0)) + 0;
    return this.listOfWords[random];
  }

  endGame() {
    this.isGameRunning = false;
    this.isGameFinished = true;
    this.stringWritten = "";
  }
}
