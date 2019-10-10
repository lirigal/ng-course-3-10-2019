import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

let count = 1;

@Component({
  selector: 'ev-expander',
  template: `
   <div class="expander">
    <div class="expander-header" (click)="toggle()">{{title}}</div>
    <div class="expander-main" *ngIf="open">
      <ng-content></ng-content>
    </div>
   </div>
  `,
  styles: []
})
export class ExpanderComponent {

  @Input()  title         = `Expander ${count++}`;
  @Input()  open: boolean = false;
  @Output() openChanged   = new EventEmitter<ExpanderComponent>()


  toggle(){
    this.open = !this.open;
    this.openChanged.emit(this);
  }

}
