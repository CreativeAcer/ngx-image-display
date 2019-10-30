import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { image, DisplayConfig, samesizeConfig, imageEffect} from '../interfaces/ngximagedisplay.interface';

enum hoverEffect {
  zoom = 'zoom',
  lighten = 'lighten',
  darken = 'darken',
  greyscale = 'greyscale',
  sepia = 'sepia'
}

@Component({
  selector: 'ngx-image-display',
  templateUrl: './ngximagedisplay.component.html',
  styleUrls: ['./ngximagedisplay.component.scss']
})
export class NgximagedisplayComponent implements OnInit {
  containerwidth: string;
  containerheight: string;
  gridcolumns: string;
  gridrows: string;
  hovering: number;
  zoomlvl: string;

  /**
   * Default configuration
   */
  defaultdisplayconfig: DisplayConfig = {
    imageminwidth: '250px',
    containerwidth: '65%',
    containerheight: '600px'
  };
  defaultimageeffect: imageEffect = {
    hoverEffectActive : false
  };
 /**
  * END Default configuration
  */

 @Input() images: Array<image>;
 @Input() sameSize: samesizeConfig;
 @Input() displayconfig: DisplayConfig;
 @Input() imageeffect: imageEffect;

 @Output() onImageSelected = new EventEmitter<image>();

 @ViewChild('myModal', { static: false }) myModal: ElementRef;
 @ViewChild('myImg', { static: false }) myImg: ElementRef;
 @ViewChild('img01', { static: false }) img01: ElementRef;
 @ViewChild('caption', { static: false }) caption: ElementRef;
 @ViewChild('close', { static: false }) close: ElementRef;

  constructor() { }

  ngOnInit() {
    if (!this.displayconfig) {
      this.displayconfig = this.defaultdisplayconfig;
    }
    if (!this.imageeffect) {
      this.imageeffect = this.defaultimageeffect;
    }
    // this.gridrows = 'repeat(auto-fit, minmax('+this.displayconfig.rowheight+', 1fr))';

    this.setContainerLayout();
    this.setContainer();
    this.setHoverEffect();
    this.setSameSize();

  }

  setContainer(): void {
    if (this.displayconfig && this.displayconfig.containerwidth) {
      this.containerwidth = this.displayconfig.containerwidth;
    }
    if (this.displayconfig && this.displayconfig.containerheight) {
      this.containerheight = this.displayconfig.containerheight;
    }
  }

  setContainerLayout(): void {
    if (this.displayconfig && this.displayconfig.imageminwidth && this.displayconfig.columns) {
      this.gridcolumns = 'repeat(' + this.displayconfig.columns + ', minmax(' + this.displayconfig.imageminwidth + ', 1fr))';
    } else if (this.displayconfig && this.displayconfig.imageminwidth) {
      this.gridcolumns = 'repeat(auto-fit, minmax(' + this.displayconfig.imageminwidth + ', 1fr))';
    } else {
      this.gridcolumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    }
  }

  setHoverEffect(): void {
    if (this.imageeffect.hoverEffectActive && this.imageeffect.hoverEffect) {
      switch (this.imageeffect.hoverEffect) {
        case 'zoom':
          this.zoomlvl = hoverEffect.zoom;
          break;
        case 'lighten':
          this.zoomlvl = hoverEffect.lighten;
          break;
        case 'darken':
          this.zoomlvl = hoverEffect.darken;
          break;
        case 'greyscale':
          this.zoomlvl = hoverEffect.greyscale;
          break;
        case 'sepia':
          this.zoomlvl = hoverEffect.sepia;
          break;
        default:
          break;
      }
    } else if (this.imageeffect.hoverEffectActive) {
      this.zoomlvl = hoverEffect.zoom;
    }
  }

  viewFullScreen(img: image){
    this.myModal.nativeElement.style.display = "block";
    this.img01.nativeElement.src = img.imageData.value
    this.caption.nativeElement.innerHTML = "Funny bird";
  }

  closeImage(){
    this.myModal.nativeElement.style.display = "none";
  }

  calculateStyle(i) {
    return {
      initialEffect: !this.hovering === i,
      zoom: this.hovering === i && (this.zoomlvl === hoverEffect.zoom),
      lighten: this.hovering === i && (this.zoomlvl === hoverEffect.lighten),
      darken: this.hovering === i && (this.zoomlvl === hoverEffect.darken),
      greyscale: this.hovering === i && (this.zoomlvl === hoverEffect.greyscale),
      sepia: this.hovering === i && (this.zoomlvl === hoverEffect.sepia)
    };
  }

  setSameSize(): void {
    if (!this.sameSize) {
      this.sameSize = {
        active: false,
        imgContainerHeight: '300px'
      };
    }
  }

  mouseenter(itemIndex) {
    if (this.imageeffect.hoverEffectActive) {
      this.hovering = itemIndex;
    }
  }
  mouseleave() {
    this.hovering = -1;
  }

  imageSelected(img: image) {
    this.onImageSelected.emit(img);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   switch (changes['imageeffect'].currentValue['hoverEffect']) {
  //     case 'zoom':
  //       this.zoomlvl = hoverEffect.zoom;
  //       break;
  //     case 'lighten':
  //       this.zoomlvl = hoverEffect.lighten;
  //       break;
  //     case 'darken':
  //       this.zoomlvl = hoverEffect.darken;
  //       break;
  //     case 'greyscale':
  //       this.zoomlvl = hoverEffect.greyscale;
  //       break;
  //     case 'sepia':
  //       this.zoomlvl = hoverEffect.sepia;
  //       break;
  //     default:
  //       break;
  //   }
  // }

}
