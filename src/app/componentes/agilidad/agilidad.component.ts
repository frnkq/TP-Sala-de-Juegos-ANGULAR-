import { Component, OnInit, Output, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit, AfterViewInit {

  @Output() gameStarted = false;
  operation: string; //math operation
  resultsDontMatch = false;
  level = 1; 
  score = 0;
  isGameFinished = false;
  /*
    Level 1: Single digit numbers. Addition, substraction. Only positives.
    Level 2: Two digit numbers. Addition, substraction. Only positives.
    Level 3: Three digit numbers. Addition, substraction.
    Level 4: Three digit numbers. Addition, substraction, multiplication.
    Level 5: Four digit numbers. Addition, substraction, multiplication.
  */
  
  result: number;
  @Input() resultWritten: string;
  numA;
  numB;
  interval: any;
  @Output() timeLeft;
  @ViewChildren("myInput") textarea: QueryList<ElementRef>;
  constructor() { }

  ngAfterViewInit(): void {
    this.textarea.changes.subscribe((list: QueryList<ElementRef>) => {
      if (list.length > 0) {
        list.first.nativeElement.focus();
      }
    });
  }


  ngOnInit() {
  }

  StartGame() {
    //selecting game
    var e = (document.getElementById("lvlSelect")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    this.level = Number.parseInt((<HTMLSelectElement><unknown>opt).value);
    console.log("playing in level "+this.level);
    this.timeLeft = 60;
    this.score = 0;
    this.gameStarted = true;
    this.countDown();
    this.GetNewOperation();
    this.isGameFinished = false;
    this.resultWritten;
  }

  Answer()
  {
    //loquesea
    this.GetNewOperation();
  }

  GetNewOperation() {
    
    this.numA = this.getRandom(0, 10);
    this.numB = this.getRandom(0, 10);

    switch (this.level) {
      //one digit sum and subs (no negatives)
      case 1:
        if(this.numA < this.numB)
        {
          let aux = this.numA;
          this.numA = this.numB;
          this.numB = aux;
        }
        this.GetOperationSumSubs();
        break;

      //two digits sum and subs (no negatives)
      case 2:
        this.numA = Number.parseFloat((Math.random() * 100).toFixed(0));
        this.numB = Number.parseFloat((Math.random() * 100).toFixed(0));
        if(this.numA < this.numB)
        {
          let aux = this.numA;
          this.numA = this.numB;
          this.numB = aux;
        }
        this.GetOperationSumSubs();
        break;

      //three digits sum and subs
      case 3:
        this.numA = Number.parseFloat((Math.random() * 1000).toFixed(0));
        this.numB = Number.parseFloat((Math.random() * 1000).toFixed(0));
        this.GetOperationSumSubs();
        break;

      //three digits sum subs mult
      case 4:
        this.numA = Number.parseFloat((Math.random() * 1000).toFixed(0));
        this.numB = Number.parseFloat((Math.random() * 1000).toFixed(0));
        this.GetOperationSumSubsMult();
        break;

      //four digits sum subs mult
      case 5:
        this.numA = Number.parseFloat((Math.random() * 10000).toFixed(0));
        this.numB = Number.parseFloat((Math.random() * 10000).toFixed(0));
        if(this.numB == 0)
          this.numB = this.numB+2;
        this.GetOperationSumSubsMult();
        break;
    }
    console.log({numA: this.numA, numB: this.numB, op: this.operation, res: this.result});
  }

  GetOperationSumSubs() {
    this.GenerateOperation(this.getRandom(0, 2));
  }

  GetOperationSumSubsMult() {
    this.GenerateOperation(this.getRandom(0, 3))
  }

  GenerateOperation(operatorIndex) {
    switch (operatorIndex) {
      case 0:
        console.log("adding");
        this.result = this.numA + this.numB;
        this.operation = this.numA + "+" + this.numB;
        break;
      case 1:
        console.log("substracting");
        this.result = this.numA - this.numB;
        this.operation = this.numA + "-" + this.numB;
        break;
      case 2:
        console.log("multiplying");
        this.result = this.numA * this.numB;
        this.operation = this.numA + "*" + this.numB;
        break;
    }

  }

  private getRandom(max, min) {
    return Math.floor(Math.random() * (max - min )) + min;
  }

  private checkAccuracy($event)
  {
    this.resultsDontMatch = false;
    if(Number.parseInt($event) != this.result)
    {
      this.resultsDontMatch = true;
    }
    else
    {
      this.score += 1 * this.level;
      this.GetNewOperation();
      this.resultWritten = "";
      this.resultsDontMatch = false;
      console.log("score", this.score);
    }
  }

  endGame(){
    this.gameStarted = false;
    this.isGameFinished = true;
    this.resultWritten = "";
  }

  private countDown()
  {
    var that = this;
    console.log("staring countdown");
    this.interval = setInterval(function(passTime){
      if(that.timeLeft <= 1)
      {
        clearInterval(that.interval);
        that.endGame();
      }
      that.timeLeft--;
    }, 1000);
  }
}
