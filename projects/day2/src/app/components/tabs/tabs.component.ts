import { PanelComponent } from './panel.component';
import { Component, OnInit, ContentChildren, QueryList, ContentChild, TemplateRef } from '@angular/core';
import { TabHeaderComponent } from './tab-header.component';

@Component({
  selector: 'ev-tabs',
  template: `
    <div class="tabs-layout">
      <div class="tabs">
        <span *ngFor="let panel of panels;index as i"
              (click)="setActive(panel)"
              [class.active]="panel.active">
          
              <span *ngIf="!tabTemplate; else temp">{{panel.title}}</span>
              <ng-template #temp>
                <ng-container *ngTemplateOutlet="tabTemplate; context: {ctx : {title:panel.title,index:i} }"></ng-container>
                <ng-container *ngComponentOutlet="tabHeaderComponent"></ng-container>
              </ng-template>
          
              
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

  @ContentChild('tabTemplate' , {read:TemplateRef, static:true} ) tabTemplate;
  @ContentChild( TabHeaderComponent, { static:true} ) tabHeaderComponent;

  @ContentChildren(PanelComponent) panels:QueryList<PanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  setActive(panel : PanelComponent){
    this.panels.forEach( p => p.active = false);
    panel.active = true;
  }
}
