# NgxImageDisplay

Ngx-Image-Display : Responsive image container

[![npm version](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display.svg)](https://badge.fury.io/js/%40creativeacer%2Fngx-image-display) [![Build Status](https://dev.azure.com/creativesuite/GitHub/_apis/build/status/CreativeAcer.ngx-image-display?branchName=master)](https://dev.azure.com/creativesuite/GitHub/_build/latest?definitionId=5&branchName=master) [![CodeFactor](https://www.codefactor.io/repository/github/creativeacer/ngx-image-display/badge/develop)](https://www.codefactor.io/repository/github/creativeacer/ngx-image-display/overview/develop) 
  

## About 
***
This project can be used to display images on a page.  
  
 **If you like the project please Star it** .  
 *Feel free to contribute!*
  

![Example](./src/assets/images/Example.PNG?raw=true "Example")  
  

## Core features  
***
1. Display multiple images in a set amount of columns or filling the available space.   
2. View selected image in full screen.  
3. Enable various hover filters.  
4. Show image text in overlay.  
5. Responsive Design. 
6. Support for Image url and base64 input.  


### Demo ( open code )  

[ngx-image-display](https://stackblitz.com/edit/ngx-image-display)

### Fullscreen demo ( live )
[ngx-image-display](https://ngx-image-display.stackblitz.io/)  

  
## Available inputs 
***
  
The component accepts the following inputs.  
  
Input | Interface | Description  
:---:|:---:|---  
images | image | This will be the array containing the images you would like the module to display.  
sameSize | samesizeConfig | This will define if the images are scaled to be the same size or not with reference to the selected height.  
displayconfig | DisplayConfig | This will set the general configuration for the module.  
imageeffect | imageEffect | This will enable or disable the selected effect when a user hovers over an image.  
  
### **Input Options**
The following settings are available  

**Image settings options**  

Option | Default&#160;value | Description
:---:|:---:|---
value | *required* | This contains the url or base64 encoded value for the image
subtext | empty | If a string is entered here it will be displayed on the image through an overlay
subtextOverlay | bottom | This will set the height of the overlay that is shown on the image. available options: 'bottom' - 'half' - 'full'  
extension | none | You can set this to the correct extension of the provided image.  
  
![Image Settings](./src/assets/images/ImageSettings.PNG?raw=true "Image Setting")
  

**Container settings options**
    
  
Option | Default&#160;value | Description
:---:|:---:|---
columns | Auto-fit | This wil set the amount of columns to display with images. ex: 2 will provide you with 2 images next to each other. if no columns are provided the application will place as many images next to each other as possible
imageminwidth | 300px | This is the minimum resolution for an image, when the containing div is scaled smaller than this an image column will be removed.
fullScreenView | false | If set to true the user will have the option to view each image in fullscreen ( shown in the image in the top right corner )  
containerwidth | 100% | Set the width for the image display container.
containerheight | 100% | Set the height for the image display container.   
  
![Container Settings](./src/assets/images/ContainerOptions.PNG?raw=true "Container Setting")
  
**Hover effect settings**
  
Option | Default&#160;value | Description
:---:|:---:|---
hoverEffectActive | false | This will enable or disable the hover effect when the mouse hovers over an image.
hoverEffect | 'zoom' | This will set the type of effect when hovering over an image. Possible settings: 'zoom' - 'lighten' - 'darken' - 'greyscale' - 'sepia'  
  
  ![Normal](./src/assets/images/ContainerOptions.PNG?raw=true "Normal")![zoom](./src/assets/images/zoom.PNG?raw=true "zoom")![lighten](./src/assets/images/lighten.PNG?raw=true "lighten")  
  ![darken](./src/assets/images/darken.PNG?raw=true "darken")![greyscale](./src/assets/images/greyscale.PNG?raw=true "greyscale")![sepia](./src/assets/images/sepia.PNG?raw=true "sepia")

**sameSize option settings**    
  
  Option | Default&#160;value | Description
:---:|:---:|---
active | false | This will set all images in the display to the same height if true.
imgContainerHeight | *required if active = true* | This will be the height all images have if the samesize image active parameter has been set to true.  
  
### Default Settings
  
If no Display configuration is provided the default settings will be used.


## Available outputs
***

The component outputs the follow events that can be triggered on.

Event&#160;name | Description
:---:|---
onImageSelected | This will emit the image that has been selected when a user clicks on an image. ex: (onImageSelected)="function($event)"
    


## Installation
***

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
***

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

### **Interfaces**
```typescript
DisplayConfig {
    columns?: number;
    imageminwidth?: string;   
    fullScreenView?: boolean;  
    containerwidth?: string;  
    containerheight?: string;  
    onclick?: Function;
}
```  
```typescript  
imageEffect {
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

#### example value for base64  
'data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+go...'  



