import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogProgressComponent } from './dialog-progress/dialog-progress.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../@shared/shared.module';



@NgModule({
  declarations: [
    DialogProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports:[
    DialogProgressComponent
  ]
})
export class ProgressModule { }
