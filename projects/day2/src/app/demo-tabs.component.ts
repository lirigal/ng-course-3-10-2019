import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-demo-tabs',
  template: `
   <div>
    <h1>{{demo1}}</h1> 
   
    <ev-listbox [source]="users" display="name">
      <ng-template let-ctx="item">
        <img [src]="ctx.pic">
        ({{ctx.id}}) - {{ctx.name}}
      </ng-template>
    </ev-listbox>



    <ev-tabs>
      {{demo1}}

      <ng-template let-ctx="context">
        {{ctx.title}}
      </ng-template>

      <ev-expander>

      </ev-expander>

    </ev-tabs>
   
   </div>
  `,
  styles: []
})
export class DemoTabsComponent implements OnInit {
  users = [
    {id:1, name:'eee', pic:''},
    {id:1, name:'eee', pic:''},
    {id:1, name:'eee', pic:''},
    {id:1, name:'eee', pic:''},
  ]
  demo1 = "demo1 !!!!";

  constructor() { }

  ngOnInit() {
  }

}
