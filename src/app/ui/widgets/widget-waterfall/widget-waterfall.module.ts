import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetWaterfallDirective } from './widget-waterfall.directive';



@NgModule({
  declarations: [
    WidgetWaterfallDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WidgetWaterfallDirective  
  ]
})
export class WidgetWaterfallModule { }
