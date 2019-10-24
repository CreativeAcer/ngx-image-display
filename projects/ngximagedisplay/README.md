# NgxImageDisplay

Responsive image container

[![npm version](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display.svg)](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display)

## About
This project can be used to display images on a page.  
The following settings are available  

### Demo ( open code )  

[ngx-image-viewer](https://stackblitz.com/edit/ngx-image-viewer)

### Fullscreen demo ( live )
[ngx-image-viewer](https://ngx-image-viewer.stackblitz.io/)

## Settings  
  
Option | Default&#160;value | Description
:---:|:---:|---
columns | Auto-fit | This wil set the amount of columns to display with images. ex: 2 will provide you with 2 images next to each other.
imageminwidth | 300px | This is the minimum resolution for an image, if the containing div is 700px 2 images can be shown, if it's 500px only one image will be show ( next to each other).
zoomonhover | false | This will enable or disable the hover effect when the mouse hovers over an image.
zoomlevel | 'small' | This will set the amount of zoom that will occur if the zoomonhover is set to true. Possible settings: 'small' - 'medium' - 'large'
containerwidth | 100% | Set the width for the image display container.
containerheight | 100% | Set the height for the image display container.  

You can set all images to be the same size in the display by setting the samesizeConfig.active to true.  
  
  Option | Default&#160;value | Description
:---:|:---:|---
active | false | This will set all images in the display to the same height if true.
imgContainerHeight | *required if active = true* | This will be the height all images will have if the samesize image active parameter has been set to true.


## Available output

The component outputs the follow events that can be triggered on.

Event&#160;name | Description
:---:|---
onImageSelected | This will emit the image that has been selected when a user clicks on an image. ex: (onImageSelected)="function($event)"

## Installation

To install this library, run:

```bash
$ npm install @creativeacer/ngx-image-display --save
```

## Using this library

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageDisplayModule.forRoot() // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```html
<!-- You can now use NgxImageDisplay component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-image-display [images]="images" [sameSize]="samesizeConfig" [displayconfig]="displayconfig" (onImageSelected)="logImage($event)"></ngx-image-display>
```  

### Interfaces
```typescript
DisplayConfig {
    columns?: number;
    imageminwidth?: string;  
    zoomonhover?: boolean;  
    zoomlevel?: 'small' | 'medium' | 'large';  
    containerwidth?: string;  
    containerheight?: string;  
    onclick?: Function;
}
``` 
```typescript
samesizeConfig {
  active: boolean;
  imgContainerHeight: string;
}
```  
```typescript
Image  {
    type: 'base64' | 'url';  
    imageData: baseImage | urlImage; 
} 
```  
```typescript
baseImage ( to be implemented )  {
    value: string;  
    extension: 'jpg' | 'jpeg' | 'png' | 'svg';  
}
```  
```typescript
urlImage  {
    value: string;  
}
```  

## Default Settings
  
If no Display configuration is provided the default settings will be used.  



