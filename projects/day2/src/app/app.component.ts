import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Day 2</h1>
      <ev-tabs>
        <ev-panel title="counter">
          aaaa   
        </ev-panel>
        <ev-panel title="tab 1">
          <h3> Tab 2</h3>
        </ev-panel>
      </ev-tabs>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'day2';
}
