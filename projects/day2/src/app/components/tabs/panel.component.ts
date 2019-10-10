import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ev-panel',
  template: `
   <div *ngIf="active">
    <ng-content></ng-content>
   </div>
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() title:string;
  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
