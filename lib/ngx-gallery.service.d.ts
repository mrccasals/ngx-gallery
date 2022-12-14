import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxGalleryService {
    private renderer;
    private swipeHandlers;
    constructor(renderer: Renderer2);
    manageSwipe(status: boolean, element: ElementRef, id: string, nextHandler: () => void, prevHandler: () => void): void;
    validateUrl(url: string): string;
    getBackgroundUrl(image: string): string;
    getFileType(fileSource: string): string;
    private getSwipeHandlers;
    private removeSwipeHandlers;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGalleryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxGalleryService>;
}
//# sourceMappingURL=ngx-gallery.service.d.ts.map