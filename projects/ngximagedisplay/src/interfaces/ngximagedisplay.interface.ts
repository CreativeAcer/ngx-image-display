export interface baseImage {
    value: string;
    extension: 'jpg' | 'jpeg' | 'png' | 'svg';
}

export interface urlImage {
    value: string;
}

// data:image/png;base64,

export interface DisplayConfig {
    // rows: number;
    columns?: number;
    imageminwidth?: string;
    zoomonhover?: boolean;
    zoomlevel?: 'small' | 'medium' | 'large';
    containerwidth?: string;
    containerheight?: string;
    onclick?: Function;
}

export interface image {
    type: 'base64' | 'url';
    imageData: baseImage | urlImage;
}

export interface samesizeConfig {
    active: boolean;
    imgContainerHeight: string;
}