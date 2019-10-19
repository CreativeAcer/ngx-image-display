import { Component, OnInit, Input } from '@angular/core';
import { DisplayConfig } from '../interfaces/displayconfig.interface';
import { image } from '../interfaces/image.interface';

@Component({
  selector: 'ngx-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {
  gridcolumns: string;
  // gridrows: string;

  @Input() images: Array<image>;
  @Input() displayconfig: DisplayConfig;

  constructor() {
  }

  ngOnInit() {
    this.gridcolumns = 'repeat(auto-fit, minmax('+this.displayconfig.width+', 1fr))';
  }

}
