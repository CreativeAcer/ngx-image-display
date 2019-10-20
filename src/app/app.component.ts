import { Component, OnDestroy } from '@angular/core';
import { DisplayConfig } from './interfaces/displayconfig.interface';
import { image } from './interfaces/image.interface';
import { ImageService } from './service/image.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  
  imagesub: Subscription;
  images: Array<image> = [];
  displayconfig: DisplayConfig;

  constructor(private imageservice: ImageService){
    this.imagesub = this.imageservice.getImages().subscribe((images) => {
      this.images = images;
    });
    this.displayconfig = {
      columns: 4,
      imageminwidth: '300px',
      zoomonhover: false,
      zoomlevel: 'small',
      containerwidth: '1000px',
      //containerheight: '600px'
    };
  }

  logImage(image){
    console.log(image);
  }

  ngOnDestroy(): void {
    this.imagesub.unsubscribe();
  }
  
}
