export interface BaseImage {
    value: string;
    subtext?: string;
    subtextOverlay?: 'bottom' | 'half' | 'full';
    extension?: 'jpg' | 'jpeg' | 'png' | 'svg';
}

export interface UrlImage {
    value: string;
}

// data:image/png;base64,

export interface DisplayConfig {
    // rows: number;
    columns?: number;
    imageminwidth?: string;
    containerwidth?: string;
    containerheight?: string;
    fullScreenView?: boolean;
    onclick?: () => ImageData;
}

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

export interface SameSizeConfig {
    active: boolean;
    imgContainerHeight: string;
}
