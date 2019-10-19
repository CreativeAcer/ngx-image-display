import { Component } from '@angular/core';
import { DisplayConfig } from './interfaces/displayconfig.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images: Array<any> = [];
  displayconfig: DisplayConfig;

  constructor(){
    for(let i = 0; i < 10; i++){
      this.images.push(
        {
          name: 'image' + i
        }
      )
    }
    this.displayconfig = {
      rows: 2,
      columns: 3
    };
  }
  
}
