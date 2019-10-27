export interface DisplayConfig {
    // rows: number;
    columns?: number;
    imageminwidth?: string;
    hoverEffectActive?: boolean;
    hoverEffect?: 'zoom' | 'lighten' | 'darken' | 'greyscale' | 'sepia';
    containerwidth?: string;
    containerheight?: string;
    onclick?: Function;
}