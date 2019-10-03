import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IConfig {
    value:number;
    step:number;
    max:number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() value:number = 5;
  @Input() step :number = 1;
  @Input() max  :number = 10;

  @Input() set config( config : IConfig ){
    this.value = config.value;
    this.step  = config.step;
    this.max   = config.max;
  }

  @Output('max-event') onMax = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.value+= this.step;
    if( this.value >= this.max ){
      this.onMax.emit(this.value);
    }
  }
  decrease(){
    this.value-= this.step;
  }

}
