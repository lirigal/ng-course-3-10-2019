import { AccordionModule } from './components/accordion/accordion.module';
import { TabsModule } from './components/tabs/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoTabsComponent } from './demo-tabs.component';

@NgModule({
   declarations: [
      AppComponent,
      DemoTabsComponent
   ],
   imports: [
      BrowserModule,
      TabsModule,
      AccordionModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
