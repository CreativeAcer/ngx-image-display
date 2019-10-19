import { Component } from '@angular/core';
import { DisplayConfig } from './interfaces/displayconfig.interface';
import { image } from './interfaces/image.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: Array<image> = [];
  displayconfig: DisplayConfig;

  constructor(){
    for(let i = 0; i < 10; i++){
      this.images.push(
        {
          type: 'url',
          imageData: {
            value: 'https://www.audubon.org/sites/default/files/a1_1902_16_barred-owl_sandra_rothenberg_kk.jpg',
          }
        }
      )
    }
    this.displayconfig = {
      // rows: 2,
      columns: 4,
      width: '300px'
    };
  }
  
}
