import { Component, OnInit, Input } from '@angular/core';
import { DisplayConfig } from '../interfaces/displayconfig.interface';

@Component({
  selector: 'ngx-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {
  columnconfig: string = '';
  gridtemplate: Array<string> = [];

  @Input() images: Array<any>;
  @Input() displayconfig: DisplayConfig;

  constructor() { }

  ngOnInit() {
    // set x amount of columns
    if(this.displayconfig && this.displayconfig.columns > 0){
      for(let col = 0; col < this.displayconfig.columns; col++){
        this.columnconfig += '1fr ';
      }
    }else{
      // set default
    }
    // set correct amount of rows
    if(this.displayconfig && this.displayconfig.rows > 0){
      const rowconfig = this.columnconfig.replace(/^[ ]+|[ ]+$/g,'');
      for(let row = 0; row < this.displayconfig.rows; row++){
        // create 1 object with multiple column objects '"x x x" "x x x"'
        if(this.gridtemplate[0]){
          this.gridtemplate[0] += '"'+rowconfig+'"';
        }else {
          this.gridtemplate.push('"'+rowconfig+'"');
        }
        
      }
    }else{
      // set default
    }
  }

}
