import { Component, OnDestroy } from '@angular/core';
import { DisplayConfig } from './interfaces/displayconfig.interface';
import { ImageData, ImageEffect } from './interfaces/image.interface';
import { ImageService } from './service/image.service';
import { Subscription } from 'rxjs';
import { SameSizeConfig } from './interfaces/samesize.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  imagesub: Subscription;
  images: Array<ImageData> = [];
  SameSizeConfig: SameSizeConfig;
  displayconfig: DisplayConfig;
  ImageEffect: ImageEffect;

  constructor(private imageservice: ImageService) {
    this.imagesub = this.imageservice.getImages().subscribe((images) => {
      this.images = images;
    });
    this.displayconfig = {
      // columns: 2,
      imageminwidth: '300px',
      containerwidth: '1000px',
      containerheight: '600px',
      fullScreenView: true
    };
    this.ImageEffect = {
      hoverEffectActive: true,
      hoverEffect: 'zoom',
    };
    this.SameSizeConfig = {
      active: false,
      imgContainerHeight: '300px'
    };
  }

  logImage(img) {
    console.log(img);
  }

  ngOnDestroy(): void {
    this.imagesub.unsubscribe();
  }

}
