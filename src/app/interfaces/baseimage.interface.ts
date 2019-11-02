export interface BaseImage {
    value: string;
    subtext?: string;
    subtextOverlay?: 'bottom' | 'half' | 'full';
    extension?: 'jpg' | 'jpeg' | 'png' | 'svg';
}

// data:image/png;base64,