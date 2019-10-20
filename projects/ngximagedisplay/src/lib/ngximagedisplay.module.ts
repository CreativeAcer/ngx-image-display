import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgximagedisplayComponent } from './ngximagedisplay.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgximagedisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [NgximagedisplayComponent]
})
export class NgxImageDisplayModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: NgxImageDisplayModule,
    };
}
}
