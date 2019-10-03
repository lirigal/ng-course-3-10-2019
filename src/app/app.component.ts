import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styles : [`
    .eyal {
      background-color: red;
      width  : 100px;
      height : 100px
    }
    .vardi {
      border:3px solid black;
    }
  `],
  template: `
   <div>
      <h1>Hi {{title}} {{aaa}}</h1>


    <app-counter

      (max-event)="title = $event" 
    
      [config]="{value:3,step:2,max:'100'}"
      [step]="3"
      [value]="7">
    </app-counter>

    <br>
    <br>
    <br>
    <br>
    <hr>



      <button (click)="isEyal=true">Add class</button>
      <button (click)="isEyal=false">Remove class</button>
      <button (click)="isVardi=true">Add class</button>
      <button (click)="isVardi=false">Remove class</button>
      <button (click)="borderNum = borderNum + 1">+</button>
      <hr>

      <div  class="xxx" 
        [style.border]="borderNum+'px solid black'"
        [ngClass]="{ eyal : isEyal , vardi : isVardi }"> 
        Hi
      </div>

<br>



      <div  [class.eyal]="isEyal" 
            [class.vardi]="isVardi">
        Hi
      </div>



      <div [innerHtml] = "eyal" (click)="title = '11111'; aaa = '321' "></div>
      <!-- div innerHtml = "{{'asass'}}">-->

      <table border="1">
        <tr>
          <td [attr.colspan]="1+1">aaaaa</td>
        </tr>
      </table>
   </div>
    
  `
})
export class AppComponent {
  aaa= "123";
  borderNum = 3;
  isEyal:boolean = false;
  isVardi = false;

  get eyal() {
    return this.title.length > 3 ? 'aaaa' : 'bbbb';
  }

  title = 'day1';
}
