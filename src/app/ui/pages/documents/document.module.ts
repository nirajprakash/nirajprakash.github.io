import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PrivacyComponent } from './privacy/privacy.component';
// import { DefaultComponent } from './default/default.component';
import { RouterModule } from '@angular/router';
// import { DeletionComponent } from './deletion/deletion.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TaruModule } from './taru/taru.module';

const routes =RouterModule.forChild( [

  {
    path: "taru",
    loadChildren: () =>
    import('./taru/taru.module').then((m) => m.TaruModule)
  }
]);

@NgModule({
  declarations: [
    // PrivacyComponent,
    // DefaultComponent,
    // DeletionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    
    MatButtonModule,
    FlexLayoutModule,
    routes
  ]
})
export class DocumentModule { }
