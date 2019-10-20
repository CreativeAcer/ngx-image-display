export interface DisplayConfig {
    // rows: number;
    columns: number;
    imageminwidth: string;
    zoomonhover?: boolean;
    zoomlevel?: 'small' | 'medium' | 'large';
    containerwidth?: string;
    containerheight?: string;
    onclick?: Function;
}