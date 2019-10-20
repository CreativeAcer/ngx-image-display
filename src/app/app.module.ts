import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { ImageService } from './service/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  exports: [ImageDisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
