import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JunkielabsIllustrationComponent } from './junkielabs/junkielabs-illustration.component';
import { ThedroidIllustrationComponent } from './thedroid/thedroid-illustration.component';



@NgModule({
  declarations: [JunkielabsIllustrationComponent, ThedroidIllustrationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    JunkielabsIllustrationComponent,ThedroidIllustrationComponent
  ]
})
export class IllustrationModule { }
