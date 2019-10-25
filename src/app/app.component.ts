import { Component, OnDestroy } from '@angular/core';
import { DisplayConfig } from './interfaces/displayconfig.interface';
import { image } from './interfaces/image.interface';
import { ImageService } from './service/image.service';
import { Subscription } from 'rxjs';
import { samesizeConfig } from './interfaces/samesize.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  imagesub: Subscription;
  images: Array<image> = [];
  samesizeConfig: samesizeConfig;
  displayconfig: DisplayConfig;

  constructor(private imageservice: ImageService) {
    this.imagesub = this.imageservice.getImages().subscribe((images) => {
      this.images = images;
    });
    this.displayconfig = {
      // columns: 2,
      imageminwidth: '300px',
      zoomonhover: false,
      zoomlevel: 'small',
      containerwidth: '1000px',
      containerheight: '600px'
    };
    this.samesizeConfig = {
      active: true,
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
