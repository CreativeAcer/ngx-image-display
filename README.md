# NgxImageDisplay

Responsive image container

[![npm version](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display.svg)](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display) [![Build Status](https://dev.azure.com/creativesuite/GitHub/_apis/build/status/CreativeAcer.ngx-image-display?branchName=master)](https://dev.azure.com/creativesuite/GitHub/_build/latest?definitionId=5&branchName=master) [![CodeFactor](https://www.codefactor.io/repository/github/creativeacer/ngx-image-display/badge/develop)](https://www.codefactor.io/repository/github/creativeacer/ngx-image-display/overview/develop) [![GitHub open issues](https://img.shields.io/github/issues/CreativeAcer/ngx-image-display.svg)](https://github.com/CreativeAcer/ngx-image-display/issues)

## About
This project can be used to display images on a page.  
  
 **If you like the project please Star it** .  
 *Feel free to contribute!*
  

![Example](./src/assets/images/Example.PNG?raw=true "Example")


### Demo ( open code )  

[ngx-image-viewer](https://stackblitz.com/edit/ngx-image-viewer)

### Fullscreen demo ( live )
[ngx-image-viewer](https://ngx-image-viewer.stackblitz.io/)  

  
    
The following settings are available  

## Settings  

Image settings options  

Option | Default&#160;value | Description
:---:|:---:|---
value | *required* | This contains the url or base64 enceded value for the image
subtext | empty | If a string is entered here it will be displayed in the image
subtextOverlay | bottom | This will set the height of the overlay that is shown on the image. available options: 'bottom' - 'half' - 'full'  
extension | none | You can set this to the correct extension of the provided image.  
  

Container settings options
    
  
Option | Default&#160;value | Description
:---:|:---:|---
columns | Auto-fit | This wil set the amount of columns to display with images. ex: 2 will provide you with 2 images next to each other.
imageminwidth | 300px | This is the minimum resolution for an image, if the containing div is 700px 2 images can be shown, if it's 500px only one image will be show ( next to each other).
containerwidth | 100% | Set the width for the image display container.
containerheight | 100% | Set the height for the image display container.  
  
Hover effect settings  
  
Option | Default&#160;value | Description
:---:|:---:|---
hoverEffectActive | false | This will enable or disable the hover effect when the mouse hovers over an image.
hoverEffect | 'zoom' | This will set the type of effect when hovering over an image. Possible settings: 'zoom' - 'lighten' - 'darken' - 'greyscale' - 'sepia'

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
**npm**
```bash
$ npm install @creativeacer/ngx-image-display --save
```  
**yarn**
```bash
$ yarn add @creativeacer/ngx-image-display
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
<!--[images] is required-->
<ngx-image-display [images]="images" [sameSize]="samesizeConfig" [imageeffect]="imageEffect" [displayconfig]="displayconfig" (onImageSelected)="logImage($event)"></ngx-image-display>
```  

### Interfaces
```typescript
DisplayConfig {
    columns?: number;
    imageminwidth?: string;   
    containerwidth?: string;  
    containerheight?: string;  
    onclick?: Function;
}
```  
```typescript  
export interface imageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
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
    imageData: baseImage;
} 
```  
```typescript
baseImage {
    value: string;  
    subtext?: string;  
    subtextOverlay?: string;
    extension?: 'jpg' | 'jpeg' | 'png' | 'svg';  
}
```  
```typescript (no longer needed - implemented in base image)
urlImage  {
    value: string;  
}
```  

#### example value for base64  
'data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+go...'  

## Default Settings
  
If no Display configuration is provided the default settings will be used.


## Future development information

Here you can find some general info for contribution

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Creating Library
Run ng g library libname

### Build npm package  
from root   
ng build ngximagedisplay

### publish
npm login   
cd to dist/ngximagedisplay folder
npm publish --access public

