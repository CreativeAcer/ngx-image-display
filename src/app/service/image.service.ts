import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { image } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Array<image>;

  constructor() {
    this.images = [
      {
        type: 'url',
        imageData: {
          value: 'https://www.audubon.org/sites/default/files/a1_1902_16_barred-owl_sandra_rothenberg_kk.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://www.cambridgesciencefestival.org/wp-content/uploads/2019/03/16057906-Qysqf0UA.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_owl.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://i.ytimg.com/vi/M-a6QjHrI_c/maxresdefault.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://pbs.twimg.com/profile_images/1042044724859809792/x2JAUwew_400x400.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://media.istockphoto.com/photos/funny-burrowing-owl-athene-cunicularia-picture-id964611070?k=6&m=964611070&s=612x612&w=0&h=iXSfsca3_xR2YU6fq45JypWo-M1eyc_TAOIo55tL060=',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ff/07/4b/sweet-potato-spotted.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiLRJKLxvaQ36XKsj2YynPVIe4C5ugNv5o_7ww9fGXatAxJCCHQ',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://cdn.nybooks.com/wp-content/uploads/2017/04/paxton_1-052517.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/08/long-owl-legs1.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://centerofthewest.org/wp-content/uploads/2018/07/Teasdale-3-11-12-blog.jpg',
        }
      },
      {
        type: 'url',
        imageData: {
          value: 'https://cdn.mbl.is/frimg/1/16/25/1162550.jpg',
        }
      }
    ]
  }

  

  getImages(): Observable<image[]> {
    return of(this.images);
  }
}
