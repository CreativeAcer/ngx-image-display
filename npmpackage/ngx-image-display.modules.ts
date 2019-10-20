import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ImageDisplayComponent } from './image-display/image-display.component';

@NgModule({
  declarations: [
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ImageDisplayComponent]
})
export class NgxImageDisplayModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxImageDisplayModule,
        };
    }
 }

 // import NgxImageDisplayModule.forRoot()