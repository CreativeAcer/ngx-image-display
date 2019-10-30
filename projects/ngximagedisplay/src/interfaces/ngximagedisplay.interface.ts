export interface baseImage {
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

export interface image {
    type: 'base64' | 'url';
    imageData: baseImage;
}

export interface imageEffect {
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
}

export interface samesizeConfig {
    active: boolean;
    imgContainerHeight: string;
}