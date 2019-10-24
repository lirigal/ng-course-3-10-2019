import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="layout">
      home works!
    </div>
  `,
  styles: [`
    .layout{
      display: grid;
      align-items: center;
      justify-items: center;
      height: 100%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
