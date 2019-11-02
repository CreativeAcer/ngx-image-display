import { BaseImage } from './BaseImage.interface';

export interface ImageData {
    type: 'base64' | 'url';
    imageData: BaseImage;
}

export interface ImageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
}
