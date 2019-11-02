export interface BaseImage {
    value: string;
    subtext?: string;
    subtextOverlay?: 'bottom' | 'half' | 'full';
    extension?: 'jpg' | 'jpeg' | 'png' | 'svg';
}

export interface urlImage {
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
    onclick?: Function;
}

export interface ImageData {
    type: 'base64' | 'url';
    imageData: BaseImage;
}

export interface ImageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
}

export interface SameSizeConfig {
    active: boolean;
    imgContainerHeight: string;
}