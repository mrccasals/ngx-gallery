import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { NgxGalleryService } from '../ngx-gallery.service';
import { NgxGalleryAction } from '../ngx-gallery-action';
import * as i0 from "@angular/core";
export declare class NgxGalleryPreviewComponent implements OnInit, OnDestroy, OnChanges {
    private sanitization;
    private elementRef;
    private helperService;
    private renderer;
    private changeDetectorRef;
    src: SafeUrl;
    srcIndex: number;
    description: string;
    type: string;
    showSpinner: boolean;
    positionLeft: number;
    positionTop: number;
    zoomValue: number;
    loading: boolean;
    rotateValue: number;
    index: number;
    images: string[] | SafeResourceUrl[];
    descriptions: string[];
    showDescription: boolean;
    arrows: boolean;
    arrowsAutoHide: boolean;
    swipe: boolean;
    fullscreen: boolean;
    forceFullscreen: boolean;
    closeOnClick: boolean;
    closeOnEsc: boolean;
    keyboardNavigation: boolean;
    arrowPrevIcon: string;
    arrowNextIcon: string;
    closeIcon: string;
    fullscreenIcon: string;
    spinnerIcon: string;
    autoPlay: boolean;
    autoPlayInterval: number;
    autoPlayPauseOnHover: boolean;
    infinityMove: boolean;
    zoom: boolean;
    zoomStep: number;
    zoomMax: number;
    zoomMin: number;
    zoomInIcon: string;
    zoomOutIcon: string;
    animation: boolean;
    actions: NgxGalleryAction[];
    rotate: boolean;
    rotateLeftIcon: string;
    rotateRightIcon: string;
    download: boolean;
    downloadIcon: string;
    bullets: boolean;
    previewOpen: EventEmitter<any>;
    previewClose: EventEmitter<any>;
    activeChange: EventEmitter<number>;
    previewImage: any;
    private isOpen;
    private timer;
    private initialX;
    private initialY;
    private initialLeft;
    private initialTop;
    private isMove;
    private keyDownListener;
    constructor(sanitization: DomSanitizer, elementRef: ElementRef, helperService: NgxGalleryService, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onKeyDown(e: any): void;
    open(index: number): void;
    close(): void;
    imageMouseEnter(): void;
    imageMouseLeave(): void;
    startAutoPlay(): void;
    stopAutoPlay(): void;
    showAtIndex(index: number): void;
    showNext(): boolean;
    showPrev(): void;
    canShowNext(): boolean;
    canShowPrev(): boolean;
    manageFullscreen(): void;
    getSafeUrl(image: string): SafeUrl;
    getFileType(fileSource: string): string;
    zoomIn(): void;
    zoomOut(): void;
    rotateLeft(): void;
    rotateRight(): void;
    getTransform(): SafeStyle;
    canZoomIn(): boolean;
    canZoomOut(): boolean;
    canDragOnZoom(): boolean;
    mouseDownHandler(e: any): void;
    mouseUpHandler(e: any): void;
    mouseMoveHandler(e: any): void;
    private getClientX;
    private getClientY;
    private resetPosition;
    private isKeyboardNext;
    private isKeyboardPrev;
    private isKeyboardEsc;
    private openFullscreen;
    private closeFullscreen;
    private isFullscreen;
    private show;
    private _show;
    private isLoaded;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGalleryPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxGalleryPreviewComponent, "ngx-gallery-preview", never, { "images": "images"; "descriptions": "descriptions"; "showDescription": "showDescription"; "arrows": "arrows"; "arrowsAutoHide": "arrowsAutoHide"; "swipe": "swipe"; "fullscreen": "fullscreen"; "forceFullscreen": "forceFullscreen"; "closeOnClick": "closeOnClick"; "closeOnEsc": "closeOnEsc"; "keyboardNavigation": "keyboardNavigation"; "arrowPrevIcon": "arrowPrevIcon"; "arrowNextIcon": "arrowNextIcon"; "closeIcon": "closeIcon"; "fullscreenIcon": "fullscreenIcon"; "spinnerIcon": "spinnerIcon"; "autoPlay": "autoPlay"; "autoPlayInterval": "autoPlayInterval"; "autoPlayPauseOnHover": "autoPlayPauseOnHover"; "infinityMove": "infinityMove"; "zoom": "zoom"; "zoomStep": "zoomStep"; "zoomMax": "zoomMax"; "zoomMin": "zoomMin"; "zoomInIcon": "zoomInIcon"; "zoomOutIcon": "zoomOutIcon"; "animation": "animation"; "actions": "actions"; "rotate": "rotate"; "rotateLeftIcon": "rotateLeftIcon"; "rotateRightIcon": "rotateRightIcon"; "download": "download"; "downloadIcon": "downloadIcon"; "bullets": "bullets"; }, { "previewOpen": "previewOpen"; "previewClose": "previewClose"; "activeChange": "activeChange"; }, never, never>;
}
//# sourceMappingURL=ngx-gallery-preview.component.d.ts.map