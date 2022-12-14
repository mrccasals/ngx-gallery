import { NgxGalleryAction } from './ngx-gallery-action';
export interface INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    layout?: string;
    startIndex?: number;
    linkTarget?: string;
    lazyLoading?: boolean;
    image?: boolean;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    imageSwipe?: boolean;
    imageAnimation?: string;
    imageSize?: string;
    imageAutoPlay?: boolean;
    imageAutoPlayInterval?: number;
    imageAutoPlayPauseOnHover?: boolean;
    imageInfinityMove?: boolean;
    imageActions?: NgxGalleryAction[];
    imageDescription?: boolean;
    imageBullets?: boolean;
    thumbnails?: boolean;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailsMoveSize?: number;
    thumbnailsOrder?: number;
    thumbnailsRemainingCount?: boolean;
    thumbnailsAsLinks?: boolean;
    thumbnailsAutoHide?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    thumbnailActions?: NgxGalleryAction[];
    thumbnailClasses?: string[];
    preview?: boolean;
    previewDescription?: boolean;
    previewArrows?: boolean;
    previewArrowsAutoHide?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewForceFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    previewAnimation?: boolean;
    previewAutoPlay?: boolean;
    previewAutoPlayInterval?: number;
    previewAutoPlayPauseOnHover?: boolean;
    previewInfinityMove?: boolean;
    previewZoom?: boolean;
    previewZoomStep?: number;
    previewZoomMax?: number;
    previewZoomMin?: number;
    previewRotate?: boolean;
    previewDownload?: boolean;
    previewCustom?: (index: number) => void;
    previewBullets?: boolean;
    arrowPrevIcon?: string;
    arrowNextIcon?: string;
    closeIcon?: string;
    fullscreenIcon?: string;
    spinnerIcon?: string;
    zoomInIcon?: string;
    zoomOutIcon?: string;
    rotateLeftIcon?: string;
    rotateRightIcon?: string;
    downloadIcon?: string;
    actions?: NgxGalleryAction[];
}
export declare class NgxGalleryOptions implements INgxGalleryOptions {
    width?: string;
    height?: string;
    breakpoint?: number;
    fullWidth?: boolean;
    layout?: string;
    startIndex?: number;
    linkTarget?: string;
    lazyLoading?: boolean;
    image?: boolean;
    imagePercent?: number;
    imageArrows?: boolean;
    imageArrowsAutoHide?: boolean;
    imageSwipe?: boolean;
    imageAnimation?: string;
    imageSize?: string;
    imageAutoPlay?: boolean;
    imageAutoPlayInterval?: number;
    imageAutoPlayPauseOnHover?: boolean;
    imageInfinityMove?: boolean;
    imageActions?: NgxGalleryAction[];
    imageDescription?: boolean;
    imageBullets?: boolean;
    thumbnails?: boolean;
    thumbnailsColumns?: number;
    thumbnailsRows?: number;
    thumbnailsPercent?: number;
    thumbnailsMargin?: number;
    thumbnailsArrows?: boolean;
    thumbnailsArrowsAutoHide?: boolean;
    thumbnailsSwipe?: boolean;
    thumbnailsMoveSize?: number;
    thumbnailsOrder?: number;
    thumbnailsRemainingCount?: boolean;
    thumbnailsAsLinks?: boolean;
    thumbnailsAutoHide?: boolean;
    thumbnailMargin?: number;
    thumbnailSize?: string;
    thumbnailActions?: NgxGalleryAction[];
    thumbnailClasses?: string[];
    preview?: boolean;
    previewDescription?: boolean;
    previewArrows?: boolean;
    previewArrowsAutoHide?: boolean;
    previewSwipe?: boolean;
    previewFullscreen?: boolean;
    previewForceFullscreen?: boolean;
    previewCloseOnClick?: boolean;
    previewCloseOnEsc?: boolean;
    previewKeyboardNavigation?: boolean;
    previewAnimation?: boolean;
    previewAutoPlay?: boolean;
    previewAutoPlayInterval?: number;
    previewAutoPlayPauseOnHover?: boolean;
    previewInfinityMove?: boolean;
    previewZoom?: boolean;
    previewZoomStep?: number;
    previewZoomMax?: number;
    previewZoomMin?: number;
    previewRotate?: boolean;
    previewDownload?: boolean;
    previewCustom?: (index: number) => void;
    previewBullets?: boolean;
    arrowPrevIcon?: string;
    arrowNextIcon?: string;
    closeIcon?: string;
    fullscreenIcon?: string;
    spinnerIcon?: string;
    zoomInIcon?: string;
    zoomOutIcon?: string;
    rotateLeftIcon?: string;
    rotateRightIcon?: string;
    downloadIcon?: string;
    actions?: NgxGalleryAction[];
    constructor(obj: INgxGalleryOptions);
}
//# sourceMappingURL=ngx-gallery-options.d.ts.map