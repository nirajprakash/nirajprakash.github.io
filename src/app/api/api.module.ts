import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiConstants, API_CONSTANTS } from './api_constants';

@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports:[
    
  ],
  providers: [ {provide: API_CONSTANTS, useClass: ApiConstants} ]
})
export class ApiModule {
// static forRoot(): ModuleWithProviders{
//   return {
//     ngModule: ApiModule,
//     providers: [ {provide: API_CONSTANTS, useClass: ApiConstants} ]
//   };
// }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
 }
