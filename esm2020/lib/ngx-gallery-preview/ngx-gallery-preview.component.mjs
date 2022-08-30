import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../ngx-gallery.service";
import * as i3 from "@angular/common";
import * as i4 from "../ngx-gallery-action/ngx-gallery-action.component";
import * as i5 from "../ngx-gallery-arrows/ngx-gallery-arrows.component";
import * as i6 from "../ngx-gallery-bullets/ngx-gallery-bullets.component";
const _c0 = ["previewImage"];
function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-arrows", 19);
    i0.ɵɵlistener("prevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_prevClick_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.showPrev(); })("nextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_nextClick_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.showNext(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 20);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_closeClick_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r18); const action_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return action_r16.onClick($event, ctx_r17.index); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r16 = ctx.$implicit;
    i0.ɵɵproperty("icon", action_r16.icon)("disabled", action_r16.disabled)("titleText", action_r16.titleText);
} }
function NgxGalleryPreviewComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r2.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 22);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.zoomOut(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 22);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.zoomIn(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 8);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.rotateLeft(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 8);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_10_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.rotateRight(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r6.rotateRightIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 8);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_11_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.manageFullscreen(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
} }
function NgxGalleryPreviewComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 23, 24);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_img_17_Template_img_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_img_17_Template_img_mouseenter_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_img_17_Template_img_mouseleave_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_img_17_Template_img_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_img_17_Template_img_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.mouseDownHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    i0.ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    i0.ɵɵproperty("src", ctx_r8.src, i0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_video_18_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "video", 25, 24);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_video_18_Template_video_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_video_18_Template_video_mouseenter_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(); return ctx_r38.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_video_18_Template_video_mouseleave_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_video_18_Template_video_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_video_18_Template_video_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.mouseDownHandler($event); });
    i0.ɵɵelement(2, "source", 26);
    i0.ɵɵtext(3, " Your browser does not support the video tag. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", ctx_r9.getTransform())("left", ctx_r9.positionLeft + "px")("top", ctx_r9.positionTop + "px");
    i0.ɵɵclassProp("ngx-gallery-active", !ctx_r9.loading)("animation", ctx_r9.animation)("ngx-gallery-grab", ctx_r9.canDragOnZoom());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r9.src, i0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ngx_gallery_bullets_19_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-bullets", 27);
    i0.ɵɵlistener("bulletChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_19_Template_ngx_gallery_bullets_bulletChange_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.showAtIndex($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("count", ctx_r10.images.length)("active", ctx_r10.index);
} }
function NgxGalleryPreviewComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_div_20_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r11.description, i0.ɵɵsanitizeHtml);
} }
function NgxGalleryPreviewComponent_ng_container_22_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 31);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_ng_container_22_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r52); const i_r47 = i0.ɵɵnextContext().index; const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.showAtIndex(i_r47); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r47 = i0.ɵɵnextContext().index;
    const ctx_r48 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r48.getIndexSrc(i_r47), i0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ng_container_22_video_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "video", 32, 24);
    i0.ɵɵelement(2, "source", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r47 = i0.ɵɵnextContext().index;
    const ctx_r49 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r49.getIndexSrc(i_r47), i0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgxGalleryPreviewComponent_ng_container_22_img_1_Template, 1, 1, "img", 29);
    i0.ɵɵtemplate(2, NgxGalleryPreviewComponent_ng_container_22_video_2_Template, 3, 1, "video", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r47 = ctx.index;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getTypeSrc(i_r47) === "image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getTypeSrc(i_r47) === "video");
} }
export class NgxGalleryPreviewComponent {
    constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.previewOpen = new EventEmitter();
        this.previewClose = new EventEmitter();
        this.activeChange = new EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', () => this.showNext(), () => this.showPrev());
        }
    }
    ngOnDestroy() {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }
    onKeyDown(e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    }
    open(index) {
        this.previewOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listen('window', 'keydown', (e) => this.onKeyDown(e));
    }
    close() {
        this.isOpen = false;
        const video = this.previewImage.nativeElement;
        if (video.currentTime > 0 &&
            !video.paused &&
            !video.ended &&
            video.readyState > 2) {
            video.pause();
        }
        this.closeFullscreen();
        this.previewClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    imageMouseEnter() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    imageMouseLeave() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    startAutoPlay() {
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(() => {
                if (!this.showNext()) {
                    this.index = -1;
                    this.showNext();
                }
            }, this.autoPlayInterval);
        }
    }
    stopAutoPlay() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    showAtIndex(index) {
        this.index = index;
        this.show();
    }
    showNext() {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    }
    showPrev() {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    }
    canShowNext() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0;
        }
        else {
            return false;
        }
    }
    manageFullscreen() {
        if (this.fullscreen || this.forceFullscreen) {
            const doc = document;
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    }
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustUrl(image);
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource);
    }
    zoomIn() {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    }
    zoomOut() {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    }
    rotateLeft() {
        this.rotateValue -= 90;
    }
    rotateRight() {
        this.rotateValue += 90;
    }
    getTransform() {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    }
    canZoomIn() {
        return this.zoomValue < this.zoomMax;
    }
    canZoomOut() {
        return this.zoomValue > this.zoomMin;
    }
    canDragOnZoom() {
        return this.zoom && this.zoomValue > 1;
    }
    mouseDownHandler(e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    }
    mouseUpHandler(e) {
        this.isMove = false;
    }
    mouseMoveHandler(e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    }
    getIndexSrc(index) {
        return this.getSafeUrl(this.images[index]);
    }
    getTypeSrc(index) {
        return this.getFileType(this.images[index]);
    }
    getClientX(e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }
    getClientY(e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }
    resetPosition() {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    }
    isKeyboardNext(e) {
        return e.keyCode === 39;
    }
    isKeyboardPrev(e) {
        return e.keyCode === 37;
    }
    isKeyboardEsc(e) {
        return e.keyCode === 27;
    }
    openFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }
    closeFullscreen() {
        if (this.isFullscreen()) {
            const doc = document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    }
    isFullscreen() {
        const doc = document;
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    }
    show(first = false) {
        this.loading = true;
        this.stopAutoPlay();
        this.activeChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout(() => this._show(), 600);
        }
    }
    _show() {
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl(this.images[this.index]);
        this.type = this.getFileType(this.images[this.index]);
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            if (this.isLoaded(this.previewImage.nativeElement) || this.type === 'video') {
                this.loading = false;
                this.startAutoPlay();
                this.changeDetectorRef.markForCheck();
            }
            else if (this.type === 'video') {
            }
            else {
                setTimeout(() => {
                    if (this.loading) {
                        this.showSpinner = true;
                        this.changeDetectorRef.markForCheck();
                    }
                });
                this.previewImage.nativeElement.onload = () => {
                    this.loading = false;
                    this.showSpinner = false;
                    this.previewImage.nativeElement.onload = null;
                    this.startAutoPlay();
                    this.changeDetectorRef.markForCheck();
                };
            }
        });
    }
    isLoaded(img) {
        if (!img.complete) {
            return false;
        }
        return !(typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0);
    }
}
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) { return new (t || NgxGalleryPreviewComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NgxGalleryService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NgxGalleryPreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryPreviewComponent, selectors: [["ngx-gallery-preview"]], viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewImage = _t.first);
    } }, hostBindings: function NgxGalleryPreviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function NgxGalleryPreviewComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { images: "images", descriptions: "descriptions", showDescription: "showDescription", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", fullscreen: "fullscreen", forceFullscreen: "forceFullscreen", closeOnClick: "closeOnClick", closeOnEsc: "closeOnEsc", keyboardNavigation: "keyboardNavigation", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", closeIcon: "closeIcon", fullscreenIcon: "fullscreenIcon", spinnerIcon: "spinnerIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", zoom: "zoom", zoomStep: "zoomStep", zoomMax: "zoomMax", zoomMin: "zoomMin", zoomInIcon: "zoomInIcon", zoomOutIcon: "zoomOutIcon", animation: "animation", actions: "actions", rotate: "rotate", rotateLeftIcon: "rotateLeftIcon", rotateRightIcon: "rotateRightIcon", download: "download", downloadIcon: "downloadIcon", bullets: "bullets" }, outputs: { previewOpen: "previewOpen", previewClose: "previewClose", activeChange: "activeChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 23, vars: 21, consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-page-row"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "closeClick", 4, "ngIf"], [3, "icon", "closeClick", 4, "ngIf"], [3, "icon", "closeClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], ["controls", "", "style", "width: 100%; height: 100%;", "class", "ngx-gallery-preview-img ngx-gallery-center", 3, "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "bulletChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [1, "ngx-gallery-preview-bottom"], [4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"], [3, "icon", "disabled", "titleText", "closeClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "closeClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], ["controls", "", 1, "ngx-gallery-preview-img", "ngx-gallery-center", 2, "width", "100%", "height", "100%", 3, "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], [3, "src"], [3, "count", "active", "bulletChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"], ["style", "width: auto; height: 150px; cursor: pointer;", 3, "src", "click", 4, "ngIf"], ["controls", "", "style", "width: auto; height: 150px;", 4, "ngIf"], [2, "width", "auto", "height", "150px", "cursor", "pointer", 3, "src", "click"], ["controls", "", 2, "width", "auto", "height", "150px"]], template: function NgxGalleryPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 4);
        i0.ɵɵtemplate(6, NgxGalleryPreviewComponent_a_6_Template, 2, 4, "a", 5);
        i0.ɵɵtemplate(7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 2, "ngx-gallery-action", 6);
        i0.ɵɵtemplate(8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 2, "ngx-gallery-action", 6);
        i0.ɵɵtemplate(9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 7);
        i0.ɵɵtemplate(10, NgxGalleryPreviewComponent_ngx_gallery_action_10_Template, 1, 1, "ngx-gallery-action", 7);
        i0.ɵɵtemplate(11, NgxGalleryPreviewComponent_ngx_gallery_action_11_Template, 1, 1, "ngx-gallery-action", 7);
        i0.ɵɵelementStart(12, "ngx-gallery-action", 8);
        i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_closeClick_12_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9);
        i0.ɵɵelement(14, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 11);
        i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_Template_div_click_15_listener() { return ctx.closeOnClick && ctx.close(); })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_15_listener($event) { return ctx.mouseUpHandler($event); })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_15_listener($event) { return ctx.mouseMoveHandler($event); })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_15_listener($event) { return ctx.mouseUpHandler($event); })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_15_listener($event) { return ctx.mouseMoveHandler($event); });
        i0.ɵɵelementStart(16, "div", 12);
        i0.ɵɵtemplate(17, NgxGalleryPreviewComponent_img_17_Template, 2, 13, "img", 13);
        i0.ɵɵtemplate(18, NgxGalleryPreviewComponent_video_18_Template, 4, 13, "video", 14);
        i0.ɵɵtemplate(19, NgxGalleryPreviewComponent_ngx_gallery_bullets_19_Template, 1, 2, "ngx-gallery-bullets", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, NgxGalleryPreviewComponent_div_20_Template, 1, 1, "div", 16);
        i0.ɵɵelementStart(21, "div", 17);
        i0.ɵɵtemplate(22, NgxGalleryPreviewComponent_ng_container_22_Template, 3, 2, "ng-container", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.arrows);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("", ctx.index + 1, " / ", ctx.images.length, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.actions);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.download && ctx.src);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.zoom);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.zoom);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.rotate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.rotate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.fullscreen);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", "ngx-gallery-close " + ctx.closeIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ngx-gallery-active", ctx.showSpinner);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ngx-gallery-icon ngx-gallery-spinner ", ctx.spinnerIcon, "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.src && ctx.type === "image");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.src && ctx.type === "video");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.bullets);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showDescription && ctx.description);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.images);
    } }, directives: [i3.NgIf, i3.NgForOf, i4.NgxGalleryActionComponent, i5.NgxGalleryArrowsComponent, i6.NgxGalleryBulletsComponent], styles: [".ngx-gallery-active[_nghost-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}[_nghost-%COMP%]{display:none;font-size:50px!important}[_nghost-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{font-size:50px!important}ngx-gallery-bullets[_ngcontent-%COMP%]{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{font-size:50px;left:0;display:inline-block}[_nghost-%COMP%]   .ngx-gallery-preview-top[_ngcontent-%COMP%]{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-page-row[_ngcontent-%COMP%]{padding-left:50%;color:#fff}.ngx-gallery-preview-icons[_ngcontent-%COMP%]{float:right}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon.ngx-gallery-icon-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-preview', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngx-gallery-arrows *ngIf=\"arrows\" (prevClick)=\"showPrev()\" (nextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\"\n                    [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n                    [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n    <div class=\"ngx-gallery-page-row\">{{index+1}} / {{images.length}}</div>\n  <div class=\"ngx-gallery-preview-icons\">\n    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                        [titleText]=\"action.titleText\" (closeClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n    <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n      <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n    </a>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\"\n                        (closeClick)=\"zoomOut()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\"\n                        (closeClick)=\"zoomIn()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (closeClick)=\"rotateLeft()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (closeClick)=\"rotateRight()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\"\n                        (closeClick)=\"manageFullscreen()\"></ngx-gallery-action>\n    <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (closeClick)=\"close()\"></ngx-gallery-action>\n  </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n  <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\"\n     (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n  <div class=\"ngx-gallery-preview-img-wrapper\">\n    <img *ngIf=\"src && type === 'image'\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\"\n         (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\"\n         (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n         [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\"\n         [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n    <video *ngIf=\"src && type === 'video'\"  #previewImage controls style=\"width: 100%; height: 100%;\"\n    class=\"ngx-gallery-preview-img ngx-gallery-center\"\n    (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n    [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\">\n      <source [src]=\"src\">\n      Your browser does not support the video tag.\n    </video>\n    <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\"\n                         (bulletChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n  </div>\n  <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\"\n       (click)=\"$event.stopPropagation()\"></div>\n  <div class=\"ngx-gallery-preview-bottom\">\n    <ng-container *ngFor=\"let imag of images; let i=index\">\n      <img *ngIf=\"getTypeSrc(i) === 'image'\" [src]=\"getIndexSrc(i)\" style=\"width: auto; height: 150px; cursor: pointer;\" (click)=\"showAtIndex(i)\" />\n      <video *ngIf=\"getTypeSrc(i) === 'video'\"  #previewImage controls style=\"width: auto; height: 150px;\">\n        <source [src]=\"getIndexSrc(i)\">\n      </video>\n    </ng-container>\n  </div>\n</div>\n", styles: [":host.ngx-gallery-active{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}:host{display:none;font-size:50px!important}:host .ngx-gallery-arrow{font-size:50px!important}ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-page-row{padding-left:50%;color:#fff}.ngx-gallery-preview-icons{float:right}.ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ElementRef }, { type: i2.NgxGalleryService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { images: [{
            type: Input
        }], descriptions: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], arrows: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], swipe: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], forceFullscreen: [{
            type: Input
        }], closeOnClick: [{
            type: Input
        }], closeOnEsc: [{
            type: Input
        }], keyboardNavigation: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], fullscreenIcon: [{
            type: Input
        }], spinnerIcon: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], autoPlayInterval: [{
            type: Input
        }], autoPlayPauseOnHover: [{
            type: Input
        }], infinityMove: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomStep: [{
            type: Input
        }], zoomMax: [{
            type: Input
        }], zoomMin: [{
            type: Input
        }], zoomInIcon: [{
            type: Input
        }], zoomOutIcon: [{
            type: Input
        }], animation: [{
            type: Input
        }], actions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateLeftIcon: [{
            type: Input
        }], rotateRightIcon: [{
            type: Input
        }], download: [{
            type: Input
        }], downloadIcon: [{
            type: Input
        }], bullets: [{
            type: Input
        }], previewOpen: [{
            type: Output
        }], previewClose: [{
            type: Output
        }], activeChange: [{
            type: Output
        }], previewImage: [{
            type: ViewChild,
            args: ['previewImage']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1wcmV2aWV3L25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNmdkIsOENBRW9EO0lBRmpCLDRNQUFhLGtCQUFVLElBQUMsK0xBQWMsa0JBQVUsSUFBeEI7SUFFUCxpQkFBcUI7OztJQUZZLG9EQUErQix1Q0FBQSx1Q0FBQSx1Q0FBQTs7OztJQU1oSCw4Q0FDZ0c7SUFBN0Msa1JBQWMseUNBQTZCLElBQUM7SUFBQyxpQkFBcUI7OztJQURsRSxzQ0FBb0IsaUNBQUEsbUNBQUE7OztJQUV2RSw2QkFBNkY7SUFDM0Ysb0JBQTJEO0lBQzdELGlCQUFJOzs7SUFGdUIsbURBQVk7SUFDbEMsZUFBbUQ7SUFBbkQsK0VBQW1EOzs7O0lBRXhELDhDQUM2QztJQUF6Qiw4TUFBYyxpQkFBUyxJQUFDO0lBQUMsaUJBQXFCOzs7SUFEakMseUNBQW9CLGtDQUFBOzs7O0lBRXJELDhDQUM0QztJQUF4Qiw4TUFBYyxnQkFBUSxJQUFDO0lBQUMsaUJBQXFCOzs7SUFEaEMsd0NBQW1CLGlDQUFBOzs7O0lBRXBELDZDQUF1RjtJQUE1Qiw4TUFBYyxvQkFBWSxJQUFDO0lBQUMsaUJBQXFCOzs7SUFBekUsNENBQXVCOzs7O0lBQzFELDZDQUF5RjtJQUE3Qiwr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QUFXO2tCQUFwQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUNHLFlBQVk7a0JBQXJCLE1BQU07WUFFb0IsWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjO1lBb0NHLFlBQVk7a0JBQXZDLFlBQVk7bUJBQUMsWUFBWTtZQU1FLFlBQVk7a0JBQXZDLFlBQVk7bUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsLCBTYWZlU3R5bGUsIFNhZmVVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5U2VydmljZX0gZnJvbSAnLi4vbmd4LWdhbGxlcnkuc2VydmljZSc7XG5pbXBvcnQge05neEdhbGxlcnlBY3Rpb259IGZyb20gJy4uL25neC1nYWxsZXJ5LWFjdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWdhbGxlcnktcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuc2NzcyddLFxuICAvLyBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBzcmM6IFNhZmVVcmw7XG4gIHNyY0luZGV4OiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgcG9zaXRpb25MZWZ0ID0gMDtcbiAgcG9zaXRpb25Ub3AgPSAwO1xuICB6b29tVmFsdWUgPSAxO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIHJvdGF0ZVZhbHVlID0gMDtcbiAgaW5kZXggPSAwO1xuXG4gIEBJbnB1dCgpIGltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgQElucHV0KCkgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgc2hvd0Rlc2NyaXB0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBhcnJvd3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFycm93c0F1dG9IaWRlOiBib29sZWFuO1xuICBASW5wdXQoKSBzd2lwZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9yY2VGdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2s6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsb3NlT25Fc2M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGtleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJyb3dQcmV2SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzcGlubmVySWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdXRvUGxheTogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b1BsYXlJbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoKSBhdXRvUGxheVBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgaW5maW5pdHlNb3ZlOiBib29sZWFuO1xuICBASW5wdXQoKSB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKSB6b29tU3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSB6b29tTWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHpvb21NaW46IG51bWJlcjtcbiAgQElucHV0KCkgem9vbUluSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB6b29tT3V0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGlvbnM6IE5neEdhbGxlcnlBY3Rpb25bXTtcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGVMZWZ0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSByb3RhdGVSaWdodEljb246IHN0cmluZztcbiAgQElucHV0KCkgZG93bmxvYWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRvd25sb2FkSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBidWxsZXRzOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBwcmV2aWV3T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZpZXdDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ByZXZpZXdJbWFnZScpIHByZXZpZXdJbWFnZTogYW55O1xuXG4gIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgdGltZXI7XG4gIHByaXZhdGUgaW5pdGlhbFggPSAwO1xuICBwcml2YXRlIGluaXRpYWxZID0gMDtcbiAgcHJpdmF0ZSBpbml0aWFsTGVmdCA9IDA7XG4gIHByaXZhdGUgaW5pdGlhbFRvcCA9IDA7XG4gIHByaXZhdGUgaXNNb3ZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBrZXlEb3duTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6YXRpb246IERvbVNhbml0aXplciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGhlbHBlclNlcnZpY2U6IE5neEdhbGxlcnlTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5hcnJvd3MgJiYgdGhpcy5hcnJvd3NBdXRvSGlkZSkge1xuICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3N3aXBlJ10pIHtcbiAgICAgIHRoaXMuaGVscGVyU2VydmljZS5tYW5hZ2VTd2lwZSh0aGlzLnN3aXBlLCB0aGlzLmVsZW1lbnRSZWYsXG4gICAgICAgICdwcmV2aWV3JywgKCkgPT4gdGhpcy5zaG93TmV4dCgpLCAoKSA9PiB0aGlzLnNob3dQcmV2KCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmtleURvd25MaXN0ZW5lcikge1xuICAgICAgdGhpcy5rZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgIGlmICh0aGlzLmFycm93c0F1dG9IaWRlICYmICF0aGlzLmFycm93cykge1xuICAgICAgdGhpcy5hcnJvd3MgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgdGhpcy5hcnJvd3MpIHtcbiAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIGlmICh0aGlzLmtleWJvYXJkTmF2aWdhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5pc0tleWJvYXJkUHJldihlKSkge1xuICAgICAgICAgIHRoaXMuc2hvd1ByZXYoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzS2V5Ym9hcmROZXh0KGUpKSB7XG4gICAgICAgICAgdGhpcy5zaG93TmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jbG9zZU9uRXNjICYmIHRoaXMuaXNLZXlib2FyZEVzYyhlKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3BlbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wcmV2aWV3T3Blbi5lbWl0KCk7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuc2hvdyh0cnVlKTtcblxuICAgIGlmICh0aGlzLmZvcmNlRnVsbHNjcmVlbikge1xuICAgICAgdGhpcy5tYW5hZ2VGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgdGhpcy5rZXlEb3duTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5vbktleURvd24oZSkpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdCB2aWRlbyA9IHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgdmlkZW8uY3VycmVudFRpbWUgPiAwICYmXG4gICAgICAhdmlkZW8ucGF1c2VkICYmXG4gICAgICAhdmlkZW8uZW5kZWQgJiZcbiAgICAgIHZpZGVvLnJlYWR5U3RhdGUgPiAyXG4gICAgKSB7XG4gICAgICB2aWRlby5wYXVzZSgpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlRnVsbHNjcmVlbigpO1xuICAgIHRoaXMucHJldmlld0Nsb3NlLmVtaXQoKTtcblxuICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICBpZiAodGhpcy5rZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxuICB9XG5cbiAgaW1hZ2VNb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgaW1hZ2VNb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0QXV0b1BsYXkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dOZXh0KCkpIHtcbiAgICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgICAgdGhpcy5zaG93TmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BBdXRvUGxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBdEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBzaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5TaG93TmV4dCgpKSB7XG4gICAgICB0aGlzLmluZGV4Kys7XG5cbiAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzaG93UHJldigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5TaG93UHJldigpKSB7XG4gICAgICB0aGlzLmluZGV4LS07XG5cbiAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgY2FuU2hvd05leHQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmZpbml0eU1vdmUgfHwgdGhpcy5pbmRleCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtYW5hZ2VGdWxsc2NyZWVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4gfHwgdGhpcy5mb3JjZUZ1bGxzY3JlZW4pIHtcbiAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50IGFzIGFueTtcblxuICAgICAgaWYgKCFkb2MuZnVsbHNjcmVlbkVsZW1lbnQgJiYgIWRvYy5tb3pGdWxsU2NyZWVuRWxlbWVudFxuICAgICAgICAmJiAhZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICB0aGlzLm9wZW5GdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRnVsbHNjcmVlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNhZmVVcmwoaW1hZ2U6IHN0cmluZyk6IFNhZmVVcmwge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXphdGlvbi5ieXBhc3NTZWN1cml0eVRydXN0VXJsKGltYWdlKTtcbiAgfVxuXG4gIGdldEZpbGVUeXBlKGZpbGVTb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGVscGVyU2VydmljZS5nZXRGaWxlVHlwZShmaWxlU291cmNlKTtcbiAgfVxuXG4gIHpvb21JbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5ab29tSW4oKSkge1xuICAgICAgdGhpcy56b29tVmFsdWUgKz0gdGhpcy56b29tU3RlcDtcblxuICAgICAgaWYgKHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWF4KSB7XG4gICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWF4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuWm9vbU91dCgpKSB7XG4gICAgICB0aGlzLnpvb21WYWx1ZSAtPSB0aGlzLnpvb21TdGVwO1xuXG4gICAgICBpZiAodGhpcy56b29tVmFsdWUgPCB0aGlzLnpvb21NaW4pIHtcbiAgICAgICAgdGhpcy56b29tVmFsdWUgPSB0aGlzLnpvb21NaW47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8PSAxKSB7XG4gICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZUxlZnQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3RhdGVWYWx1ZSAtPSA5MDtcbiAgfVxuXG4gIHJvdGF0ZVJpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMucm90YXRlVmFsdWUgKz0gOTA7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKCdzY2FsZSgnICsgdGhpcy56b29tVmFsdWUgKyAnKSByb3RhdGUoJyArIHRoaXMucm90YXRlVmFsdWUgKyAnZGVnKScpO1xuICB9XG5cbiAgY2FuWm9vbUluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnpvb21WYWx1ZSA8IHRoaXMuem9vbU1heDtcbiAgfVxuXG4gIGNhblpvb21PdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWluO1xuICB9XG5cbiAgY2FuRHJhZ09uWm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tICYmIHRoaXMuem9vbVZhbHVlID4gMTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbkRyYWdPblpvb20oKSkge1xuICAgICAgdGhpcy5pbml0aWFsWCA9IHRoaXMuZ2V0Q2xpZW50WChlKTtcbiAgICAgIHRoaXMuaW5pdGlhbFkgPSB0aGlzLmdldENsaWVudFkoZSk7XG4gICAgICB0aGlzLmluaXRpYWxMZWZ0ID0gdGhpcy5wb3NpdGlvbkxlZnQ7XG4gICAgICB0aGlzLmluaXRpYWxUb3AgPSB0aGlzLnBvc2l0aW9uVG9wO1xuICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoZSk6IHZvaWQge1xuICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICBpZiAodGhpcy5pc01vdmUpIHtcbiAgICAgIHRoaXMucG9zaXRpb25MZWZ0ID0gdGhpcy5pbml0aWFsTGVmdCArICh0aGlzLmdldENsaWVudFgoZSkgLSB0aGlzLmluaXRpYWxYKTtcbiAgICAgIHRoaXMucG9zaXRpb25Ub3AgPSB0aGlzLmluaXRpYWxUb3AgKyAodGhpcy5nZXRDbGllbnRZKGUpIC0gdGhpcy5pbml0aWFsWSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5kZXhTcmMoaW5kZXgpOiBTYWZlVXJse1xuICAgIHJldHVybiB0aGlzLmdldFNhZmVVcmwodGhpcy5pbWFnZXNbaW5kZXhdIGFzIHN0cmluZyk7XG4gIH1cblxuICBnZXRUeXBlU3JjKGluZGV4KTogU3RyaW5ne1xuICByZXR1cm4gdGhpcy5nZXRGaWxlVHlwZSh0aGlzLmltYWdlc1tpbmRleF0gYXMgc3RyaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xpZW50WChlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xpZW50WShlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy56b29tKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uTGVmdCA9IDA7XG4gICAgICB0aGlzLnBvc2l0aW9uVG9wID0gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzS2V5Ym9hcmROZXh0KGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZS5rZXlDb2RlID09PSAzOTtcbiAgfVxuXG4gIHByaXZhdGUgaXNLZXlib2FyZFByZXYoZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlLmtleUNvZGUgPT09IDM3O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0tleWJvYXJkRXNjKGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZS5rZXlDb2RlID09PSAyNztcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnk7XG5cbiAgICBpZiAoZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuXG4gICAgICBpZiAoZG9jLmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvYy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2MubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2MubXNFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2MubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICBkb2MubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2Mud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0Z1bGxzY3JlZW4oKSB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuXG4gICAgcmV0dXJuIGRvYy5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnRcbiAgICAgIHx8IGRvYy5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fCBkb2MubXNGdWxsc2NyZWVuRWxlbWVudDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBzaG93KGZpcnN0ID0gZmFsc2UpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuaW5kZXgpO1xuXG4gICAgaWYgKGZpcnN0IHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Nob3coKSwgNjAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaG93KCkge1xuICAgIHRoaXMuem9vbVZhbHVlID0gMTtcbiAgICB0aGlzLnJvdGF0ZVZhbHVlID0gMDtcbiAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuICAgIHRoaXMuc3JjID0gdGhpcy5nZXRTYWZlVXJsKHRoaXMuaW1hZ2VzW3RoaXMuaW5kZXhdIGFzIHN0cmluZyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5nZXRGaWxlVHlwZSh0aGlzLmltYWdlc1t0aGlzLmluZGV4XSBhcyBzdHJpbmcpO1xuICAgIHRoaXMuc3JjSW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uc1t0aGlzLmluZGV4XTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0xvYWRlZCh0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50KSB8fCB0aGlzLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlbycpIHtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2hvd1NwaW5uZXIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW1nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFpbWcuY29tcGxldGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISh0eXBlb2YgaW1nLm5hdHVyYWxXaWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW1nLm5hdHVyYWxXaWR0aCA9PT0gMCk7XG4gIH1cblxufVxuIiwiPG5neC1nYWxsZXJ5LWFycm93cyAqbmdJZj1cImFycm93c1wiIChwcmV2Q2xpY2spPVwic2hvd1ByZXYoKVwiIChuZXh0Q2xpY2spPVwic2hvd05leHQoKVwiIFtwcmV2RGlzYWJsZWRdPVwiIWNhblNob3dQcmV2KClcIlxuICAgICAgICAgICAgICAgICAgICBbbmV4dERpc2FibGVkXT1cIiFjYW5TaG93TmV4dCgpXCIgW2Fycm93UHJldkljb25dPVwiYXJyb3dQcmV2SWNvblwiXG4gICAgICAgICAgICAgICAgICAgIFthcnJvd05leHRJY29uXT1cImFycm93TmV4dEljb25cIj48L25neC1nYWxsZXJ5LWFycm93cz5cbjxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wYWdlLXJvd1wiPnt7aW5kZXgrMX19IC8ge3tpbWFnZXMubGVuZ3RofX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctaWNvbnNcIj5cbiAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtpY29uXT1cImFjdGlvbi5pY29uXCIgW2Rpc2FibGVkXT1cImFjdGlvbi5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGl0bGVUZXh0XT1cImFjdGlvbi50aXRsZVRleHRcIiAoY2xvc2VDbGljayk9XCJhY3Rpb24ub25DbGljaygkZXZlbnQsIGluZGV4KVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgIDxhICpuZ0lmPVwiZG93bmxvYWQgJiYgc3JjXCIgW2hyZWZdPVwic3JjXCIgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZG93bmxvYWQ+XG4gICAgICA8aSBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7eyBkb3dubG9hZEljb24gfX1cIj48L2k+XG4gICAgPC9hPlxuICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XCJ6b29tXCIgW2ljb25dPVwiem9vbU91dEljb25cIiBbZGlzYWJsZWRdPVwiIWNhblpvb21PdXQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VDbGljayk9XCJ6b29tT3V0KClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwiem9vbVwiIFtpY29uXT1cInpvb21Jbkljb25cIiBbZGlzYWJsZWRdPVwiIWNhblpvb21JbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbG9zZUNsaWNrKT1cInpvb21JbigpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdJZj1cInJvdGF0ZVwiIFtpY29uXT1cInJvdGF0ZUxlZnRJY29uXCIgKGNsb3NlQ2xpY2spPVwicm90YXRlTGVmdCgpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdJZj1cInJvdGF0ZVwiIFtpY29uXT1cInJvdGF0ZVJpZ2h0SWNvblwiIChjbG9zZUNsaWNrKT1cInJvdGF0ZVJpZ2h0KClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwiZnVsbHNjcmVlblwiIFtpY29uXT1cIiduZ3gtZ2FsbGVyeS1mdWxsc2NyZWVuICcgKyBmdWxsc2NyZWVuSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VDbGljayk9XCJtYW5hZ2VGdWxsc2NyZWVuKClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICA8bmd4LWdhbGxlcnktYWN0aW9uIFtpY29uXT1cIiduZ3gtZ2FsbGVyeS1jbG9zZSAnICsgY2xvc2VJY29uXCIgKGNsb3NlQ2xpY2spPVwiY2xvc2UoKVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm5neC1zcGlubmVyLXdyYXBwZXIgbmd4LWdhbGxlcnktY2VudGVyXCIgW2NsYXNzLm5neC1nYWxsZXJ5LWFjdGl2ZV09XCJzaG93U3Bpbm5lclwiPlxuICA8aSBjbGFzcz1cIm5neC1nYWxsZXJ5LWljb24gbmd4LWdhbGxlcnktc3Bpbm5lciB7e3NwaW5uZXJJY29ufX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LXdyYXBwZXJcIiAoY2xpY2spPVwiY2xvc2VPbkNsaWNrICYmIGNsb3NlKClcIiAobW91c2V1cCk9XCJtb3VzZVVwSGFuZGxlcigkZXZlbnQpXCJcbiAgICAgKG1vdXNlbW92ZSk9XCJtb3VzZU1vdmVIYW5kbGVyKCRldmVudClcIiAodG91Y2hlbmQpPVwibW91c2VVcEhhbmRsZXIoJGV2ZW50KVwiICh0b3VjaG1vdmUpPVwibW91c2VNb3ZlSGFuZGxlcigkZXZlbnQpXCI+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LWltZy13cmFwcGVyXCI+XG4gICAgPGltZyAqbmdJZj1cInNyYyAmJiB0eXBlID09PSAnaW1hZ2UnXCIgI3ByZXZpZXdJbWFnZSBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctaW1nIG5neC1nYWxsZXJ5LWNlbnRlclwiIFtzcmNdPVwic3JjXCJcbiAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAobW91c2VlbnRlcik9XCJpbWFnZU1vdXNlRW50ZXIoKVwiIChtb3VzZWxlYXZlKT1cImltYWdlTW91c2VMZWF2ZSgpXCJcbiAgICAgICAgIChtb3VzZWRvd24pPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCIgKHRvdWNoc3RhcnQpPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCJcbiAgICAgICAgIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwiIWxvYWRpbmdcIiBbY2xhc3MuYW5pbWF0aW9uXT1cImFuaW1hdGlvblwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1ncmFiXT1cImNhbkRyYWdPblpvb20oKVwiXG4gICAgICAgICBbc3R5bGUudHJhbnNmb3JtXT1cImdldFRyYW5zZm9ybSgpXCIgW3N0eWxlLmxlZnRdPVwicG9zaXRpb25MZWZ0ICsgJ3B4J1wiIFtzdHlsZS50b3BdPVwicG9zaXRpb25Ub3AgKyAncHgnXCIvPlxuICAgIDx2aWRlbyAqbmdJZj1cInNyYyAmJiB0eXBlID09PSAndmlkZW8nXCIgICNwcmV2aWV3SW1hZ2UgY29udHJvbHMgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiXG4gICAgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LWltZyBuZ3gtZ2FsbGVyeS1jZW50ZXJcIlxuICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAobW91c2VlbnRlcik9XCJpbWFnZU1vdXNlRW50ZXIoKVwiIChtb3VzZWxlYXZlKT1cImltYWdlTW91c2VMZWF2ZSgpXCIgKG1vdXNlZG93bik9XCJtb3VzZURvd25IYW5kbGVyKCRldmVudClcIiAodG91Y2hzdGFydCk9XCJtb3VzZURvd25IYW5kbGVyKCRldmVudClcIlxuICAgIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwiIWxvYWRpbmdcIiBbY2xhc3MuYW5pbWF0aW9uXT1cImFuaW1hdGlvblwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1ncmFiXT1cImNhbkRyYWdPblpvb20oKVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiZ2V0VHJhbnNmb3JtKClcIiBbc3R5bGUubGVmdF09XCJwb3NpdGlvbkxlZnQgKyAncHgnXCIgW3N0eWxlLnRvcF09XCJwb3NpdGlvblRvcCArICdweCdcIj5cbiAgICAgIDxzb3VyY2UgW3NyY109XCJzcmNcIj5cbiAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXG4gICAgPC92aWRlbz5cbiAgICA8bmd4LWdhbGxlcnktYnVsbGV0cyAqbmdJZj1cImJ1bGxldHNcIiBbY291bnRdPVwiaW1hZ2VzLmxlbmd0aFwiIFthY3RpdmVdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChidWxsZXRDaGFuZ2UpPVwic2hvd0F0SW5kZXgoJGV2ZW50KVwiPjwvbmd4LWdhbGxlcnktYnVsbGV0cz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LXRleHRcIiAqbmdJZj1cInNob3dEZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwiZGVzY3JpcHRpb25cIlxuICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctYm90dG9tXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaW1hZyBvZiBpbWFnZXM7IGxldCBpPWluZGV4XCI+XG4gICAgICA8aW1nICpuZ0lmPVwiZ2V0VHlwZVNyYyhpKSA9PT0gJ2ltYWdlJ1wiIFtzcmNdPVwiZ2V0SW5kZXhTcmMoaSlcIiBzdHlsZT1cIndpZHRoOiBhdXRvOyBoZWlnaHQ6IDE1MHB4OyBjdXJzb3I6IHBvaW50ZXI7XCIgKGNsaWNrKT1cInNob3dBdEluZGV4KGkpXCIgLz5cbiAgICAgIDx2aWRlbyAqbmdJZj1cImdldFR5cGVTcmMoaSkgPT09ICd2aWRlbydcIiAgI3ByZXZpZXdJbWFnZSBjb250cm9scyBzdHlsZT1cIndpZHRoOiBhdXRvOyBoZWlnaHQ6IDE1MHB4O1wiPlxuICAgICAgICA8c291cmNlIFtzcmNdPVwiZ2V0SW5kZXhTcmMoaSlcIj5cbiAgICAgIDwvdmlkZW8+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=