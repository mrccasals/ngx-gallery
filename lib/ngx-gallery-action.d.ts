export interface INgxGalleryAction {
    icon: string;
    disabled?: boolean;
    titleText?: string;
    onClick: (event: Event, index: number) => void;
}
export declare class NgxGalleryAction implements INgxGalleryAction {
    icon: string;
    disabled?: boolean;
    titleText?: string;
    onClick: (event: Event, index: number) => void;
    constructor(action: INgxGalleryAction);
}
//# sourceMappingURL=ngx-gallery-action.d.ts.map