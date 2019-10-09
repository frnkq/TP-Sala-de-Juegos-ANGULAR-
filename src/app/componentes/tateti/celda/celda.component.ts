import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'my-cell',
  template: '<div>{{value}}</div>',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
  constructor() { }

  ngOnInit() {
  }

}
