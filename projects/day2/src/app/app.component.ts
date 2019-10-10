import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Day 2</h1>

      <ev-accordion>

        <ev-expander title="bla bla demo">
          BLA BLA BLA
          BLA BLA BLA
          BLA BLA BLA
          BLA BLA BLA
        </ev-expander>

        <ev-expander title="tabs demo">
          <ev-tabs>
            <ev-panel title="counter" [active]="true">
              aaaa   
            </ev-panel>
            <ev-panel title="tab 2">
              <h3> Tab 2</h3>
            </ev-panel>
            <ev-panel title="tab 3">
              <h3>Demossss....</h3>
            </ev-panel>
          </ev-tabs>
        </ev-expander>
        
      </ev-accordion>

<hr>
<hr>
<hr>
<hr>

      <ev-tabs>
        <ev-panel title="counter" [active]="true">
          aaaa   
        </ev-panel>
        <ev-panel title="tab 2">
          <h3> Tab 2</h3>
        </ev-panel>
        <ev-panel title="tab 3">
            <ev-tabs>
              <ev-panel title="counter" [active]="true">
                aaaa   
              </ev-panel>
              <ev-panel title="tab 2">
                <h3> Tab 2</h3>
              </ev-panel>
              <ev-panel title="tab 3">
                <h3>Demossss....</h3>
              </ev-panel>
            </ev-tabs>
        </ev-panel>
      </ev-tabs>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'day2';
}
