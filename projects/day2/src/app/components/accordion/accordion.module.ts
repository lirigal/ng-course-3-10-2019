import { AccordionComponent } from './accordion.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpanderComponent } from './expander.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AccordionComponent,
        ExpanderComponent
    ],
    declarations: [
        AccordionComponent,
        ExpanderComponent
    ],
    providers: [],
})
export class AccordionModule { }
