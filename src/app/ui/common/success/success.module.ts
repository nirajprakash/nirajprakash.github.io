import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    DialogSuccessComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    DialogSuccessComponent   
  ]
})
export class SuccessModule { }
