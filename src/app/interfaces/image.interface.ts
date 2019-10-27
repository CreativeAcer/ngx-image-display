import { baseImage } from './baseimage.interface';

export interface image {
    type: 'base64' | 'url';
    imageData: baseImage;
}

export interface imageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
}