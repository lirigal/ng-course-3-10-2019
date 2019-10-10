import { PanelComponent } from './panel.component';
import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'ev-tabs',
  template: `
    <div>
      <div class="tabs">
        <span *ngFor="let panel of panels">
          <a href="#" (click)="setActive(panel)">{{panel.title}}</a> |
        </span>
      </div>
      <div class="panels">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class TabsComponent implements OnInit {

  @ContentChildren(PanelComponent) panels:QueryList<PanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  setActive(panel : PanelComponent){
    this.panels.forEach( p => p.active = false);
    panel.active = true;
  }
}
