import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';
import { DisplayConfig } from '../interfaces/displayconfig.interface';
import { image } from '../interfaces/image.interface';
import { samesizeConfig } from '../interfaces/samesize.interface';

enum zoomlevel {
  small = '1.2',
  medium = '1.5',
  large = '1.8'
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
    defaultdisplayconfig : DisplayConfig = {
      imageminwidth: '250px',
      zoomonhover: false,
      zoomlevel: 'small',
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
    if(!this.displayconfig){
      this.displayconfig = this.defaultdisplayconfig;
    }
    // this.gridrows = 'repeat(auto-fit, minmax('+this.displayconfig.rowheight+', 1fr))';

    this.setContainerLayout();
    this.setContainer();
    this.setZoom();
    this.setSameSize();
  }

  setContainer() : void {
    if (this.displayconfig && this.displayconfig.containerwidth) {
      this.containerwidth = this.displayconfig.containerwidth;
    }
    if (this.displayconfig && this.displayconfig.containerheight) {
      this.containerheight = this.displayconfig.containerheight;
    }
  }

  setContainerLayout() : void {
    if (this.displayconfig && this.displayconfig.imageminwidth && this.displayconfig.columns) {
      this.gridcolumns = 'repeat(' + this.displayconfig.columns + ', minmax(' + this.displayconfig.imageminwidth + ', 1fr))';
    } else if (this.displayconfig && this.displayconfig.imageminwidth) {
      this.gridcolumns = 'repeat(auto-fit, minmax(' + this.displayconfig.imageminwidth + ', 1fr))';
    } else {
      this.gridcolumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    }
  }

  setZoom() : void {
    if (this.displayconfig.zoomonhover && this.displayconfig.zoomlevel) {
      switch (this.displayconfig.zoomlevel) {
        case 'small':
          this.zoomlvl = 'scale(' + zoomlevel.small + ')';
          break;
        case 'medium':
          this.zoomlvl = 'scale(' + zoomlevel.medium + ')';
          break;
        case 'large':
          this.zoomlvl = 'scale(' + zoomlevel.large + ')';
          break;
        default:
          break;
      }
    } else if (this.displayconfig.zoomonhover) {
      this.zoomlvl = 'scale(' + zoomlevel.small + ')';
    }
  }

  setSameSize() :void {
    if (!this.sameSize) {
      this.sameSize = {
        active: false,
        imgContainerHeight: '300px'
      };
    }
  }

  mouseenter(itemIndex) {
    if (this.displayconfig.zoomonhover) {
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
