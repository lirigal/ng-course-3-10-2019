import { AccordionModule } from './components/accordion/accordion.module';
import { TabsModule } from './components/tabs/tabs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent,     
   ],
   imports: [
      // Angular Modules
      BrowserModule,
      
      // My Modules
      TabsModule,
      AccordionModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
