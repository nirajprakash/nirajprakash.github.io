import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container/main-container.component';
import { EmptyContainerComponent } from './empty-container/empty-container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { WidgetWaterfallModule } from '../widgets/widget-waterfall/widget-waterfall.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    MainContainerComponent,
    EmptyContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatDialogModule,
    WidgetWaterfallModule,
  ],
  exports:[
    MainContainerComponent,
    EmptyContainerComponent  
  ]
})
export class ContainerModule { }
