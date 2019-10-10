import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { ExpanderComponent } from './expander.component';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'ev-accordion',
  template: `
   <div class="accordion">
    <ng-content></ng-content>
   </div>
  `,
  styles: []
})
export class AccordionComponent implements AfterContentInit {
  
  @ContentChildren(ExpanderComponent) expanders : QueryList<ExpanderComponent>;

  ngAfterContentInit(): void {
    this.expanders.forEach(exp=>{
      exp.openChanged.pipe(
        tap( item => {
          if(item.open){
            this.expanders.forEach( e=> e.open = false)
            item.open = true;
          }
        })
      ).subscribe()
    })
  }  

}
