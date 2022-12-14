import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';
import { NgxGalleryService } from '../ngx-gallery.service';
import { NgxGalleryAction } from '../ngx-gallery-action';
import * as i0 from "@angular/core";
export declare class NgxGalleryThumbnailsComponent implements OnChanges {
    private sanitization;
    private elementRef;
    private helperService;
    thumbnailsLeft: string;
    thumbnailsMarginLeft: string;
    mouseenter: boolean;
    remainingCountValue: number;
    minStopIndex: number;
    images: string[] | SafeResourceUrl[];
    isAnimating: boolean;
    links: string[];
    labels: string[];
    linkTarget: string;
    columns: number;
    rows: number;
    arrows: boolean;
    arrowsAutoHide: boolean;
    margin: number;
    selectedIndex: number;
    clickable: boolean;
    swipe: boolean;
    size: string;
    arrowPrevIcon: string;
    arrowNextIcon: string;
    moveSize: number;
    order: number;
    remainingCount: boolean;
    lazyLoading: boolean;
    actions: NgxGalleryAction[];
    activeChange: EventEmitter<any>;
    private index;
    constructor(sanitization: DomSanitizer, elementRef: ElementRef, helperService: NgxGalleryService);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    reset(index: number): void;
    getImages(): string[] | SafeResourceUrl[];
    handleClick(event: Event, index: number): void;
    hasLink(index: number): boolean;
    moveRight(): void;
    moveLeft(): void;
    canMoveRight(): boolean;
    canMoveLeft(): boolean;
    getThumbnailLeft(index: number): SafeStyle;
    getThumbnailTop(index: number): SafeStyle;
    getThumbnailWidth(): SafeStyle;
    getThumbnailHeight(): SafeStyle;
    setThumbnailsPosition(): void;
    setDefaultPosition(): void;
    canShowArrows(): boolean;
    validateIndex(): void;
    getSafeUrl(image: string | SafeResourceUrl): SafeStyle;
    getFileType(fileSource: string | SafeResourceUrl): string;
    private getThumbnailPosition;
    private getThumbnailDimension;
    private getMaxIndex;
    private getVisibleCount;
    private getSafeStyle;
    static ??fac: i0.????FactoryDeclaration<NgxGalleryThumbnailsComponent, never>;
    static ??cmp: i0.????ComponentDeclaration<NgxGalleryThumbnailsComponent, "ngx-gallery-thumbnails", never, { "images": "images"; "isAnimating": "isAnimating"; "links": "links"; "labels": "labels"; "linkTarget": "linkTarget"; "columns": "columns"; "rows": "rows"; "arrows": "arrows"; "arrowsAutoHide": "arrowsAutoHide"; "margin": "margin"; "selectedIndex": "selectedIndex"; "clickable": "clickable"; "swipe": "swipe"; "size": "size"; "arrowPrevIcon": "arrowPrevIcon"; "arrowNextIcon": "arrowNextIcon"; "moveSize": "moveSize"; "order": "order"; "remainingCount": "remainingCount"; "lazyLoading": "lazyLoading"; "actions": "actions"; }, { "activeChange": "activeChange"; }, never, never>;
}
//# sourceMappingURL=ngx-gallery-thumbnails.component.d.ts.map