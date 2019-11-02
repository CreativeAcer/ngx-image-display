import { Component, OnInit, Input, EventEmitter, Output, ViewChild, Renderer2 } from '@angular/core';
import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect} from '../interfaces/ngximagedisplay.interface';

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
  defaultImageEffect: ImageEffect = {
    hoverEffectActive : false
  };
 /**
  * END Default configuration
  */

 @Input() images: Array<ImageData>;
 @Input() sameSize: SameSizeConfig;
 @Input() displayconfig: DisplayConfig;
 @Input() ImageEffect: ImageEffect;

 @Output() onImageSelected = new EventEmitter<ImageData>();

 @ViewChild('myModal', { static: false }) myModal;
 @ViewChild('myImg', { static: false }) myImg;
 @ViewChild('img01', { static: false }) img01;
 @ViewChild('caption', { static: false }) caption;
 @ViewChild('close', { static: false }) close;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.displayconfig) {
      this.displayconfig = this.defaultdisplayconfig;
    }
    if (!this.ImageEffect) {
      this.ImageEffect = this.defaultImageEffect;
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
    if (this.ImageEffect.hoverEffectActive && this.ImageEffect.hoverEffect) {
      switch (this.ImageEffect.hoverEffect) {
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
    } else if (this.ImageEffect.hoverEffectActive) {
      this.zoomlvl = hoverEffect.zoom;
    }
  }

  viewFullScreen(img: ImageData) {
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'block');
    this.renderer.setProperty(this.img01.nativeElement, 'src', img.imageData.value);
    this.renderer.setProperty(this.caption.nativeElement, 'innerHTML', img.imageData.subtext ? img.imageData.subtext : '');
  }

  closeImage() {
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'none');
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
    if (this.ImageEffect.hoverEffectActive) {
      this.hovering = itemIndex;
    }
  }
  mouseleave() {
    this.hovering = -1;
  }

  imageSelected(img: ImageData) {
    this.onImageSelected.emit(img);
  }

}
