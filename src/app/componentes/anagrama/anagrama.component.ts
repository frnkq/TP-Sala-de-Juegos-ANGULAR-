import { Component, OnInit, Output, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit, AfterViewInit {

  @Output() currentWord: string;
  @Output() distortedWord: string;
  @Output() gameStarted;
  @Output() gameFinished;
  @Output() score;
  @Output() timeLeft;
  wordsDontMatch = false;
  words: string[];
  @ViewChildren("myInput") textarea: QueryList<ElementRef>;

  constructor(private http: HttpClient, private userService: LocalStorageService) {
    this.gameStarted = false;
    this.score = 0;
    this.timeLeft = 0;
    this.words = [];
    this.currentWord = "";
    this.distortedWord = "";
    this.http.get('../../assets/level1.txt', { responseType: 'text' }).subscribe(data => this._populateWordsArray(data));
  }

  //focus textarea on show
  ngAfterViewInit(): void {
    this.textarea.changes.subscribe((list: QueryList<ElementRef>) => {
      if (list.length > 0) {
        list.first.nativeElement.focus();
      }
    });
  }
  ngOnInit() {
  }

  StartGame()
  {
    this.score = 0;
    this.timeLeft = 60;
    this.gameStarted = true;
    this.NewWord();
    this.countDown();
  }

  EndGame()
  {
    this.gameStarted = false;
    this.gameFinished = true;
    this.userService.UpdateUserScore('anagrama', this.score);
  }

  NewWord() {
    this.currentWord = this._getRandomWord().toUpperCase();
    this.distortedWord = this._distortWord(this.currentWord, "", []).toUpperCase();
    console.log({word:this.currentWord, distorted: this.distortedWord});
  }

  GotCorrectWord()
  {
    this.score++;
    this.NewWord();
  }

  CheckAccuracy($event) {
    this.wordsDontMatch = false;
    $event = $event.toUpperCase();
    //flag as inval/id when a character doesn't match
    for (let i = 0; i < $event.length; i++) {
      if ($event[i] != this.currentWord[i]) {
        this.wordsDontMatch = true;
      }
    }

    if ($event == this.currentWord)
    {
      this.wordsDontMatch = false;
      this.textarea.first.nativeElement.value = "";
      this.GotCorrectWord();
    }
  }

  GetArray(n: number)
  {
    let array = [];
    for(let i=0;i<n;i++)
      array.push(i);
    return array;
  }

  countDown()
  {
    let interval = setInterval(f=>{
      if(this.timeLeft < 1)
      {
        clearInterval(interval);
        this.EndGame();
      }
      this.timeLeft--;
    }, 1000);
  }
  private _populateWordsArray(data: any) {
    for (const line of data.split(/[\r\n]+/)) {
      this.words.push(line);
    }
  }

  private _getRandomWord() {
    return this.words[Math.floor(Math.random() * ((this.words.length - 1) - 0))];
  }

  private _distortWord(word: string, distortedWord, indices: number[]) {

    let random = Math.floor(Math.random() * word.length);
    let notPresent = true;

    indices.forEach(i => { if (i == random) notPresent = false });

    if (notPresent) {
      indices.push(random);
      distortedWord += word[random];
    }

    if (indices.length == word.length)
      return distortedWord;
    else
      return this._distortWord(word, distortedWord, indices);
  }
}
