import { Component, OnInit, Output, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-game',
  templateUrl: './dedosrapidos.component.html',
  styleUrls: ['./dedosrapidos.component.scss']
})
export class DedosrapidosComponent implements OnInit, AfterViewInit {

  //listOfWords: string[];
  level = 1;
  level1: string[];
  level2: string[];
  level3: string[];
  level4: string[];
  level5: string[];
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

  constructor(private http: HttpClient, private userService: LocalStorageService) {
    //this.http.get('../../assets/words.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data));
    //this.listOfWords = [];
    this.level1 = [];
    this.level2 = [];
    this.level3 = [];
    this.level4 = [];
    this.level5 = [];
    this.http.get('../../assets/level1.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data, 1));
    this.http.get('../../assets/level2.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data, 2));
    this.http.get('../../assets/level3.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data, 3));
    this.http.get('../../assets/level4.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data, 4));
    this.http.get('../../assets/level5.txt', { responseType: 'text' }).subscribe(data => this.populateWordsArray(data, 5));
    this.timeLeft = 60;
    this.score = 0;
    this.isGameRunning = false;
    this.wordsDontMatch = false;
    this.isGameFinished = false;
  }

  populateWordsArray(textFileContent, level) {
    switch (level) {
      case 1:
        for (const line of textFileContent.split(/[\r\n]+/)) {
          this.level1.push(line);
        }

        break;

      case 2:

        for (const line of textFileContent.split(/[\r\n]+/)) {
          this.level2.push(line);
        }
        break;

      case 3:

        for (const line of textFileContent.split(/[\r\n]+/)) {
          this.level3.push(line);
        }
        break;

      case 4:

        for (const line of textFileContent.split(/[\r\n]+/)) {
          this.level4.push(line);
        }
        break;

      case 5:
        for (const line of textFileContent.split(/[\r\n]+/)) {
          this.level5.push(line);
        }

        break;
    }
  }

  ngOnInit() {
  }

  checkAccuracy($event) {
    //principle of innocence
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
        this.score += 1 * this.level;
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
    //get level
    var e = (document.getElementById("lvlSelect")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    this.level = Number.parseInt((<HTMLSelectElement><unknown>opt).value);
    console.log("playing in level "+this.level);
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
    let listOfWords = new Array<string>();
    switch (this.level) {
      case 1:
        listOfWords = this.level1;
        break;
      case 2:
        listOfWords = this.level2;
        break;
      case 3:
        listOfWords = this.level3;
        break;
      case 4:
        listOfWords = this.level4;
        break;
      case 5:
        listOfWords = this.level5;

    }
    let random = Math.floor(Math.random() * (listOfWords.length - 0)) + 0;
    return listOfWords[random];
  }

  endGame() {
    this.isGameRunning = false;
    this.isGameFinished = true;
    this.stringWritten = "";
    this.userService.UpdateUserScore('dedosRapidos', this.score);
  }
}
