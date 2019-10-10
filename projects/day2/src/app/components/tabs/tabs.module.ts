import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [
    TabsComponent,
    PanelComponent
  ],
  exports: [
    TabsComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ]

})
export class TabsModule { }
