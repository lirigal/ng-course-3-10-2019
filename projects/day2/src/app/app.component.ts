import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Day 2</h1>

      <ev-tabs>

        <ng-template #tabTemplate let-context="ctx">
          !!! {{context.title}} - ({{context.index}})
        </ng-template>

        <ev-tab-header>
          +++++ {{foo}} ++++
        </ev-tab-header>

        <ev-panel title="accordion" [active]="true">
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
  foo = "foo method demo"
}
