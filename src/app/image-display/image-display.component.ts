import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2 } from '@angular/core';
import { DisplayConfig } from '../interfaces/displayconfig.interface';
import { ImageData, ImageEffect, ClickedImageData } from '../interfaces/image.interface';
import { SameSizeConfig } from '../interfaces/samesize.interface';

enum hoverEffect {
  zoom = 'zoom',
  lighten = 'lighten',
  darken = 'darken',
  greyscale = 'greyscale',
  sepia = 'sepia'
}

@Component({
  selector: 'ngx-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})

export class ImageDisplayComponent implements OnInit {
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
      containerheight: '600px',
      fullScreenView: false
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
  @Input() imageEffect: ImageEffect;

  @Output() onImageSelected = new EventEmitter<ClickedImageData>();

  @ViewChild('myModal', { static: false }) myModal;
  @ViewChild('myImg', { static: false }) myImg;
  @ViewChild('img01', { static: false }) img01;
  @ViewChild('caption', { static: false }) caption;
  @ViewChild('close', { static: false }) close;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    if (!this.displayconfig) {
      this.displayconfig = this.defaultdisplayconfig;
    }
    if (!this.imageEffect) {
      this.imageEffect = this.defaultImageEffect;
    }
    // this.gridrows = 'repeat(auto-fit, minmax('+this.displayconfig.rowheight+', 1fr))';

    this.setContainerLayout();
    this.setContainer();
    this.setHoverEffect();
    this.setSameSize();
  }

  viewFullScreen(img: ImageData) {
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'block');
    this.renderer.setProperty(this.img01.nativeElement, 'src', img.imageData.value);
    this.renderer.setProperty(this.caption.nativeElement, 'innerHTML', img.imageData.subtext ? img.imageData.subtext : '');
  }

  closeImage() {
    this.renderer.setStyle(this.myModal.nativeElement, 'display', 'none');
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
    if (this.imageEffect.hoverEffectActive && this.imageEffect.hoverEffect) {
      switch (this.imageEffect.hoverEffect) {
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
    } else if (this.imageEffect.hoverEffectActive) {
      this.zoomlvl = hoverEffect.zoom;
    }
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
    if (this.imageEffect.hoverEffectActive) {
      this.hovering = itemIndex;
    }
  }
  mouseleave() {
    this.hovering = -1;
  }

  imageSelected(mouseEvent: MouseEvent, img: ImageData) {
    this.onImageSelected.emit({
      imageData: img.imageData,
      type: img.type,
      mouseEvent: mouseEvent
    });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   switch (changes['ImageEffect'].currentValue['hoverEffect']) {
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
