import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PrivacyComponent } from './privacy/privacy.component';
// import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
// import { DeletionComponent } from './deletion/deletion.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TaruPrivacyComponent } from './taru-privacy/taru-privacy.component';

const routes =RouterModule.forChild( [

  {
    path: "privacy",
    component: TaruPrivacyComponent
  },
//   {
//     path: "deletion",
//     component: DeletionComponent
//   },
//   {
//     path: "",
//     component: DefaultComponent
//   }
]);

@NgModule({
  declarations: [
    // PrivacyComponent,
    // DefaultComponent,
    // DeletionComponent
  
    TaruPrivacyComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    routes
  ]
})
export class TaruModule { }
