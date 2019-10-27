import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { DisplayConfig } from '../interfaces/displayconfig.interface';
import { image } from '../interfaces/image.interface';
import { samesizeConfig } from '../interfaces/samesize.interface';

enum hoverEffect {
  zoom = 'zoom',
  lighten = 'lighten',
  darken = 'darken'
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
      hoverEffectActive: false,
      hoverEffect: 'zoom',
      containerwidth: '65%',
      containerheight: '600px'
    };
   /**
    * END Default configuration
    */

  @Input() images: Array<image>;
  @Input() sameSize: samesizeConfig;
  @Input() displayconfig: DisplayConfig;

  @Output() onImageSelected = new EventEmitter<image>();

  constructor() {
  }

  ngOnInit() {
    if (!this.displayconfig) {
      this.displayconfig = this.defaultdisplayconfig;
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
    if (this.displayconfig.hoverEffectActive && this.displayconfig.hoverEffect) {
      switch (this.displayconfig.hoverEffect) {
        case 'zoom':
          this.zoomlvl = hoverEffect.zoom;
          break;
        case 'lighten':
          this.zoomlvl = hoverEffect.lighten;
          break;
        case 'darken':
          this.zoomlvl = hoverEffect.darken;
          break;
        default:
          break;
      }
    } else if (this.displayconfig.hoverEffectActive) {
      this.zoomlvl = hoverEffect.zoom;
    }
  }

  calculateStyle(i) {
    return {
      'initialEffect': !this.hovering==i,
      'zoom': this.hovering==i && (this.zoomlvl === hoverEffect.zoom),
      'lighten': this.hovering==i && (this.zoomlvl === hoverEffect.lighten),
      'darken': this.hovering==i && (this.zoomlvl === hoverEffect.darken)
    }
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
    if (this.displayconfig.hoverEffectActive) {
      this.hovering = itemIndex;
    }
  }
  mouseleave() {
    this.hovering = -1;
  }

  imageSelected(img: image) {
    this.onImageSelected.emit(img);
  }

}
