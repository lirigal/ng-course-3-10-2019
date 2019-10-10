import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-tabs',
  template: `
    <p>
      tabs works!
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
