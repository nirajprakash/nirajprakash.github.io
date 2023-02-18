import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyContainerComponent } from './ui/container/empty-container/empty-container.component';
import { MainContainerComponent } from './ui/container/main-container/main-container.component';

const routes: Routes = [

  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/home/home.module').then((m) => m.HomeModule),
      }
    ]

  },

  {
    path: 'documents',
    component: EmptyContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/pages/documents/document.module').then((m) => m.DocumentModule),
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
