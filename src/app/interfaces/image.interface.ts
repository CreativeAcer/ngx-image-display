import { baseImage } from './baseimage.interface';

export interface image {
    type: 'base64' | 'url';
    imageData: baseImage;
}