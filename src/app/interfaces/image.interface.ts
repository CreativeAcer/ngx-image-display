import { BaseImage } from './baseimage.interface';

export interface ImageData {
    type: 'base64' | 'url';
    imageData: BaseImage;
}

export interface ClickedImageData extends ImageData {
    mouseEvent: MouseEvent;
}

export interface ImageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
}
