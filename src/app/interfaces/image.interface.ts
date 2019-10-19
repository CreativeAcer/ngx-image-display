import { baseImage } from './baseimage.interface';
import { urlImage } from './urlimage.interface';

export interface image {
    type: 'base64' | 'url';
    imageData: baseImage | urlImage;
}