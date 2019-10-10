import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ev-panel',
  template: `
   <p>
      panel Works! - {{title}}
      <ng-content></ng-content>
   </p>
  `,
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
