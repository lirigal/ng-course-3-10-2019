import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { PanelComponent } from './panel.component';
import { TabHeaderComponent } from './tab-header.component';

@NgModule({
  declarations: [
    TabsComponent,
    PanelComponent,
    TabHeaderComponent
  ],
  exports: [
    TabsComponent,
    PanelComponent,
    TabHeaderComponent
  ],
  imports: [
    CommonModule
  ]

})
export class TabsModule { }
