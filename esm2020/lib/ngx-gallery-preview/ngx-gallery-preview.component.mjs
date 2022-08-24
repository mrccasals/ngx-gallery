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
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    i0.ɵɵlistener("prevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_prevClick_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.showPrev(); })("nextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_nextClick_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.showNext(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 17);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_closeClick_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const action_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return action_r15.onClick($event, ctx_r16.index); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r15 = ctx.$implicit;
    i0.ɵɵproperty("icon", action_r15.icon)("disabled", action_r15.disabled)("titleText", action_r15.titleText);
} }
function NgxGalleryPreviewComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("href", ctx_r2.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.zoomOut(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 19);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.zoomIn(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.rotateLeft(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_10_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.rotateRight(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r6.rotateRightIcon);
} }
function NgxGalleryPreviewComponent_ngx_gallery_action_11_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 7);
    i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_11_Template_ngx_gallery_action_closeClick_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.manageFullscreen(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
} }
function NgxGalleryPreviewComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 20, 21);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_img_17_Template_img_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_img_17_Template_img_mouseenter_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_img_17_Template_img_mouseleave_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_img_17_Template_img_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_img_17_Template_img_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.mouseDownHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    i0.ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    i0.ɵɵproperty("src", ctx_r8.src, i0.ɵɵsanitizeUrl);
} }
function NgxGalleryPreviewComponent_video_18_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "video", 22, 21);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_video_18_Template_video_click_0_listener($event) { return $event.stopPropagation(); })("mouseenter", function NgxGalleryPreviewComponent_video_18_Template_video_mouseenter_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.imageMouseEnter(); })("mouseleave", function NgxGalleryPreviewComponent_video_18_Template_video_mouseleave_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.imageMouseLeave(); })("mousedown", function NgxGalleryPreviewComponent_video_18_Template_video_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.mouseDownHandler($event); })("touchstart", function NgxGalleryPreviewComponent_video_18_Template_video_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.mouseDownHandler($event); });
    i0.ɵɵelement(2, "source", 23);
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
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-bullets", 24);
    i0.ɵɵlistener("bulletChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_19_Template_ngx_gallery_bullets_bulletChange_0_listener($event) { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.showAtIndex($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("count", ctx_r10.images.length)("active", ctx_r10.index);
} }
function NgxGalleryPreviewComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_div_20_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r11.description, i0.ɵɵsanitizeHtml);
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
    } }, inputs: { images: "images", descriptions: "descriptions", showDescription: "showDescription", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", fullscreen: "fullscreen", forceFullscreen: "forceFullscreen", closeOnClick: "closeOnClick", closeOnEsc: "closeOnEsc", keyboardNavigation: "keyboardNavigation", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", closeIcon: "closeIcon", fullscreenIcon: "fullscreenIcon", spinnerIcon: "spinnerIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", zoom: "zoom", zoomStep: "zoomStep", zoomMax: "zoomMax", zoomMin: "zoomMin", zoomInIcon: "zoomInIcon", zoomOutIcon: "zoomOutIcon", animation: "animation", actions: "actions", rotate: "rotate", rotateLeftIcon: "rotateLeftIcon", rotateRightIcon: "rotateRightIcon", download: "download", downloadIcon: "downloadIcon", bullets: "bullets" }, outputs: { previewOpen: "previewOpen", previewClose: "previewClose", activeChange: "activeChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 21, vars: 18, consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "closeClick", 4, "ngIf"], [3, "icon", "closeClick", 4, "ngIf"], [3, "icon", "closeClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], ["controls", "", "style", "width: 100%; height: 100%;", "class", "ngx-gallery-preview-img ngx-gallery-center", 3, "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "bulletChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"], [3, "icon", "disabled", "titleText", "closeClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "closeClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], ["controls", "", 1, "ngx-gallery-preview-img", "ngx-gallery-center", 2, "width", "100%", "height", "100%", 3, "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], [3, "src"], [3, "count", "active", "bulletChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"]], template: function NgxGalleryPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4, "Estic provant modificar el plugin");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 3);
        i0.ɵɵtemplate(6, NgxGalleryPreviewComponent_a_6_Template, 2, 4, "a", 4);
        i0.ɵɵtemplate(7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 2, "ngx-gallery-action", 5);
        i0.ɵɵtemplate(8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 2, "ngx-gallery-action", 5);
        i0.ɵɵtemplate(9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 6);
        i0.ɵɵtemplate(10, NgxGalleryPreviewComponent_ngx_gallery_action_10_Template, 1, 1, "ngx-gallery-action", 6);
        i0.ɵɵtemplate(11, NgxGalleryPreviewComponent_ngx_gallery_action_11_Template, 1, 1, "ngx-gallery-action", 6);
        i0.ɵɵelementStart(12, "ngx-gallery-action", 7);
        i0.ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_closeClick_12_listener() { return ctx.close(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵelement(14, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 10);
        i0.ɵɵlistener("click", function NgxGalleryPreviewComponent_Template_div_click_15_listener() { return ctx.closeOnClick && ctx.close(); })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_15_listener($event) { return ctx.mouseUpHandler($event); })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_15_listener($event) { return ctx.mouseMoveHandler($event); })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_15_listener($event) { return ctx.mouseUpHandler($event); })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_15_listener($event) { return ctx.mouseMoveHandler($event); });
        i0.ɵɵelementStart(16, "div", 11);
        i0.ɵɵtemplate(17, NgxGalleryPreviewComponent_img_17_Template, 2, 13, "img", 12);
        i0.ɵɵtemplate(18, NgxGalleryPreviewComponent_video_18_Template, 4, 13, "video", 13);
        i0.ɵɵtemplate(19, NgxGalleryPreviewComponent_ngx_gallery_bullets_19_Template, 1, 2, "ngx-gallery-bullets", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, NgxGalleryPreviewComponent_div_20_Template, 1, 1, "div", 15);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.arrows);
        i0.ɵɵadvance(5);
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
    } }, directives: [i3.NgIf, i3.NgForOf, i4.NgxGalleryActionComponent, i5.NgxGalleryArrowsComponent, i6.NgxGalleryBulletsComponent], styles: [".ngx-gallery-active[_nghost-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}[_nghost-%COMP%]{display:none;font-size:50px!important}[_nghost-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{font-size:50px!important}ngx-gallery-bullets[_ngcontent-%COMP%]{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{font-size:50px;left:0;display:inline-block}[_nghost-%COMP%]   .ngx-gallery-preview-top[_ngcontent-%COMP%]{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-preview-icons[_ngcontent-%COMP%]{float:right}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon.ngx-gallery-icon-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-preview', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngx-gallery-arrows *ngIf=\"arrows\" (prevClick)=\"showPrev()\" (nextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\"\n                    [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n                    [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n  <div class=\"ngx-gallery-preview-icons\">\n    <span>Estic provant modificar el plugin</span>\n    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                        [titleText]=\"action.titleText\" (closeClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n    <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n      <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n    </a>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\"\n                        (closeClick)=\"zoomOut()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\"\n                        (closeClick)=\"zoomIn()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (closeClick)=\"rotateLeft()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (closeClick)=\"rotateRight()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\"\n                        (closeClick)=\"manageFullscreen()\"></ngx-gallery-action>\n    <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (closeClick)=\"close()\"></ngx-gallery-action>\n  </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n  <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\"\n     (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n  <div class=\"ngx-gallery-preview-img-wrapper\">\n    <img *ngIf=\"src && type === 'image'\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\"\n         (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\"\n         (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n         [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\"\n         [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n    <video *ngIf=\"src && type === 'video'\"  #previewImage controls style=\"width: 100%; height: 100%;\"\n    class=\"ngx-gallery-preview-img ngx-gallery-center\"\n    (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n    [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\">\n      <source [src]=\"src\">\n      Your browser does not support the video tag.\n    </video>\n    <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\"\n                         (bulletChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n  </div>\n  <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\"\n       (click)=\"$event.stopPropagation()\"></div>\n</div>\n", styles: [":host.ngx-gallery-active{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}:host{display:none;font-size:50px!important}:host .ngx-gallery-arrow{font-size:50px!important}ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-preview-icons{float:right}.ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1wcmV2aWV3L25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNmdkIsOENBRW9EO0lBRmpCLDRNQUFhLGtCQUFVLElBQUMsK0xBQWMsa0JBQVUsSUFBeEI7SUFFUCxpQkFBcUI7OztJQUZZLG9EQUErQix1Q0FBQSx1Q0FBQSx1Q0FBQTs7OztJQU1oSCw4Q0FDZ0c7SUFBN0Msa1JBQWMseUNBQTZCLElBQUM7SUFBQyxpQkFBcUI7OztJQURsRSxzQ0FBb0IsaUNBQUEsbUNBQUE7OztJQUV2RSw2QkFBNkY7SUFDM0Ysb0JBQTJEO0lBQzdELGlCQUFJOzs7SUFGdUIsbURBQVk7SUFDbEMsZUFBbUQ7SUFBbkQsK0VBQW1EOzs7O0lBRXhELDhDQUM2QztJQUF6Qiw4TUFBYyxpQkFBUyxJQUFDO0lBQUMsaUJBQXFCOzs7SUFEakMseUNBQW9CLGtDQUFBOzs7O0lBRXJELDhDQUM0QztJQUF4Qiw4TUFBYyxnQkFBUSxJQUFDO0lBQUMsaUJBQXFCOzs7SUFEaEMsd0NBQW1CLGlDQUFBOzs7O0lBRXBELDZDQUF1RjtJQUE1Qiw4TUFBYyxvQkFBWSxJQUFDO0lBQUMsaUJBQXFCOzs7SUFBekUsNENBQXVCOzs7O0lBQzFELDZDQUF5RjtJQUE3Qiwr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LGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVJLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csWUFBWTtrQkFBckIsTUFBTTtZQUVvQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFvQ0csWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBTUUsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSwgU2FmZVVybH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05neEdhbGxlcnlTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS5zZXJ2aWNlJztcbmltcG9ydCB7Tmd4R2FsbGVyeUFjdGlvbn0gZnJvbSAnLi4vbmd4LWdhbGxlcnktYWN0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIHNyYzogU2FmZVVybDtcbiAgc3JjSW5kZXg6IG51bWJlcjtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBzaG93U3Bpbm5lciA9IGZhbHNlO1xuICBwb3NpdGlvbkxlZnQgPSAwO1xuICBwb3NpdGlvblRvcCA9IDA7XG4gIHpvb21WYWx1ZSA9IDE7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgcm90YXRlVmFsdWUgPSAwO1xuICBpbmRleCA9IDA7XG5cbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFycm93czogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJyb3dzQXV0b0hpZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoKSBmb3JjZUZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsb3NlT25DbGljazogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xvc2VPbkVzYzogYm9vbGVhbjtcbiAgQElucHV0KCkga2V5Ym9hcmROYXZpZ2F0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBhcnJvd1ByZXZJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFycm93TmV4dEljb246IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW5JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwaW5uZXJJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuO1xuICBASW5wdXQoKSBhdXRvUGxheUludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGF1dG9QbGF5UGF1c2VPbkhvdmVyOiBib29sZWFuO1xuICBASW5wdXQoKSBpbmZpbml0eU1vdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpIHpvb21TdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIHpvb21NYXg6IG51bWJlcjtcbiAgQElucHV0KCkgem9vbU1pbjogbnVtYmVyO1xuICBASW5wdXQoKSB6b29tSW5JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb21PdXRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aW9uczogTmd4R2FsbGVyeUFjdGlvbltdO1xuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvdGF0ZUxlZnRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvdGF0ZVJpZ2h0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkb3dubG9hZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZG93bmxvYWRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ1bGxldHM6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHByZXZpZXdPcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJldmlld0Nsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgncHJldmlld0ltYWdlJykgcHJldmlld0ltYWdlOiBhbnk7XG5cbiAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0aW1lcjtcbiAgcHJpdmF0ZSBpbml0aWFsWCA9IDA7XG4gIHByaXZhdGUgaW5pdGlhbFkgPSAwO1xuICBwcml2YXRlIGluaXRpYWxMZWZ0ID0gMDtcbiAgcHJpdmF0ZSBpbml0aWFsVG9wID0gMDtcbiAgcHJpdmF0ZSBpc01vdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIGtleURvd25MaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXphdGlvbjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgaGVscGVyU2VydmljZTogTmd4R2FsbGVyeVNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmFycm93cyAmJiB0aGlzLmFycm93c0F1dG9IaWRlKSB7XG4gICAgICB0aGlzLmFycm93cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snc3dpcGUnXSkge1xuICAgICAgdGhpcy5oZWxwZXJTZXJ2aWNlLm1hbmFnZVN3aXBlKHRoaXMuc3dpcGUsIHRoaXMuZWxlbWVudFJlZixcbiAgICAgICAgJ3ByZXZpZXcnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMua2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgIXRoaXMuYXJyb3dzKSB7XG4gICAgICB0aGlzLmFycm93cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiB0aGlzLmFycm93cykge1xuICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgaWYgKHRoaXMua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmlzS2V5Ym9hcmRQcmV2KGUpKSB7XG4gICAgICAgICAgdGhpcy5zaG93UHJldigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNLZXlib2FyZE5leHQoZSkpIHtcbiAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNsb3NlT25Fc2MgJiYgdGhpcy5pc0tleWJvYXJkRXNjKGUpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvcGVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnByZXZpZXdPcGVuLmVtaXQoKTtcblxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5zaG93KHRydWUpO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VGdWxsc2NyZWVuKSB7XG4gICAgICB0aGlzLm1hbmFnZUZ1bGxzY3JlZW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAna2V5ZG93bicsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0IHZpZGVvID0gdGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoXG4gICAgICB2aWRlby5jdXJyZW50VGltZSA+IDAgJiZcbiAgICAgICF2aWRlby5wYXVzZWQgJiZcbiAgICAgICF2aWRlby5lbmRlZCAmJlxuICAgICAgdmlkZW8ucmVhZHlTdGF0ZSA+IDJcbiAgICApIHtcbiAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VGdWxsc2NyZWVuKCk7XG4gICAgdGhpcy5wcmV2aWV3Q2xvc2UuZW1pdCgpO1xuXG4gICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcblxuICAgIGlmICh0aGlzLmtleURvd25MaXN0ZW5lcikge1xuICAgICAgdGhpcy5rZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBpbWFnZU1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheVBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcbiAgICB9XG4gIH1cblxuICBpbWFnZU1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheVBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRBdXRvUGxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcblxuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd05leHQoKSkge1xuICAgICAgICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuYXV0b1BsYXlJbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcEF1dG9QbGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgfVxuICB9XG5cbiAgc2hvd0F0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIHNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblNob3dOZXh0KCkpIHtcbiAgICAgIHRoaXMuaW5kZXgrKztcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPT09IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNob3dQcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhblNob3dQcmV2KCkpIHtcbiAgICAgIHRoaXMuaW5kZXgtLTtcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMuaW5maW5pdHlNb3ZlIHx8IHRoaXMuaW5kZXggPCB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2FuU2hvd1ByZXYoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLmluZGV4ID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1hbmFnZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZnVsbHNjcmVlbiB8fCB0aGlzLmZvcmNlRnVsbHNjcmVlbikge1xuICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQgYXMgYW55O1xuXG4gICAgICBpZiAoIWRvYy5mdWxsc2NyZWVuRWxlbWVudCAmJiAhZG9jLm1vekZ1bGxTY3JlZW5FbGVtZW50XG4gICAgICAgICYmICFkb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiYgIWRvYy5tc0Z1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgIHRoaXMub3BlbkZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2FmZVVybChpbWFnZTogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoaW1hZ2UpO1xuICB9XG5cbiAgZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oZWxwZXJTZXJ2aWNlLmdldEZpbGVUeXBlKGZpbGVTb3VyY2UpO1xuICB9XG5cbiAgem9vbUluKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhblpvb21JbigpKSB7XG4gICAgICB0aGlzLnpvb21WYWx1ZSArPSB0aGlzLnpvb21TdGVwO1xuXG4gICAgICBpZiAodGhpcy56b29tVmFsdWUgPiB0aGlzLnpvb21NYXgpIHtcbiAgICAgICAgdGhpcy56b29tVmFsdWUgPSB0aGlzLnpvb21NYXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgem9vbU91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5ab29tT3V0KCkpIHtcbiAgICAgIHRoaXMuem9vbVZhbHVlIC09IHRoaXMuem9vbVN0ZXA7XG5cbiAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8IHRoaXMuem9vbU1pbikge1xuICAgICAgICB0aGlzLnpvb21WYWx1ZSA9IHRoaXMuem9vbU1pbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuem9vbVZhbHVlIDw9IDEpIHtcbiAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcm90YXRlTGVmdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdGF0ZVZhbHVlIC09IDkwO1xuICB9XG5cbiAgcm90YXRlUmlnaHQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3RhdGVWYWx1ZSArPSA5MDtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXphdGlvbi5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3NjYWxlKCcgKyB0aGlzLnpvb21WYWx1ZSArICcpIHJvdGF0ZSgnICsgdGhpcy5yb3RhdGVWYWx1ZSArICdkZWcpJyk7XG4gIH1cblxuICBjYW5ab29tSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuem9vbVZhbHVlIDwgdGhpcy56b29tTWF4O1xuICB9XG5cbiAgY2FuWm9vbU91dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy56b29tVmFsdWUgPiB0aGlzLnpvb21NaW47XG4gIH1cblxuICBjYW5EcmFnT25ab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gJiYgdGhpcy56b29tVmFsdWUgPiAxO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuRHJhZ09uWm9vbSgpKSB7XG4gICAgICB0aGlzLmluaXRpYWxYID0gdGhpcy5nZXRDbGllbnRYKGUpO1xuICAgICAgdGhpcy5pbml0aWFsWSA9IHRoaXMuZ2V0Q2xpZW50WShlKTtcbiAgICAgIHRoaXMuaW5pdGlhbExlZnQgPSB0aGlzLnBvc2l0aW9uTGVmdDtcbiAgICAgIHRoaXMuaW5pdGlhbFRvcCA9IHRoaXMucG9zaXRpb25Ub3A7XG4gICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihlKTogdm9pZCB7XG4gICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGlmICh0aGlzLmlzTW92ZSkge1xuICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSB0aGlzLmluaXRpYWxMZWZ0ICsgKHRoaXMuZ2V0Q2xpZW50WChlKSAtIHRoaXMuaW5pdGlhbFgpO1xuICAgICAgdGhpcy5wb3NpdGlvblRvcCA9IHRoaXMuaW5pdGlhbFRvcCArICh0aGlzLmdldENsaWVudFkoZSkgLSB0aGlzLmluaXRpYWxZKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENsaWVudFgoZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG4gIH1cblxuICBwcml2YXRlIGdldENsaWVudFkoZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuem9vbSkge1xuICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSAwO1xuICAgICAgdGhpcy5wb3NpdGlvblRvcCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0tleWJvYXJkTmV4dChlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMzk7XG4gIH1cblxuICBwcml2YXRlIGlzS2V5Ym9hcmRQcmV2KGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZS5rZXlDb2RlID09PSAzNztcbiAgfVxuXG4gIHByaXZhdGUgaXNLZXlib2FyZEVzYyhlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMjc7XG4gIH1cblxuICBwcml2YXRlIG9wZW5GdWxsc2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55O1xuXG4gICAgaWYgKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50IGFzIGFueTtcblxuICAgICAgaWYgKGRvYy5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICBkb2MuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jLm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jLm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvYy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNGdWxsc2NyZWVuKCkge1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50IGFzIGFueTtcblxuICAgIHJldHVybiBkb2MuZnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jLndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50XG4gICAgICB8fCBkb2MubW96RnVsbFNjcmVlbkVsZW1lbnQgfHwgZG9jLm1zRnVsbHNjcmVlbkVsZW1lbnQ7XG4gIH1cblxuXG4gIHByaXZhdGUgc2hvdyhmaXJzdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuXG4gICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcblxuICAgIGlmIChmaXJzdCB8fCAhdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX3Nob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zaG93KCksIDYwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLnpvb21WYWx1ZSA9IDE7XG4gICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgdGhpcy5yZXNldFBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLnNyYyA9IHRoaXMuZ2V0U2FmZVVybCh0aGlzLmltYWdlc1t0aGlzLmluZGV4XSBhcyBzdHJpbmcpO1xuICAgIHRoaXMudHlwZSA9IHRoaXMuZ2V0RmlsZVR5cGUodGhpcy5pbWFnZXNbdGhpcy5pbmRleF0gYXMgc3RyaW5nKTtcbiAgICB0aGlzLnNyY0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbnNbdGhpcy5pbmRleF07XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2FkZWQodGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudCkgfHwgdGhpcy50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAndmlkZW8nKSB7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UubmF0aXZlRWxlbWVudC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzTG9hZGVkKGltZyk6IGJvb2xlYW4ge1xuICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEodHlwZW9mIGltZy5uYXR1cmFsV2lkdGggIT09ICd1bmRlZmluZWQnICYmIGltZy5uYXR1cmFsV2lkdGggPT09IDApO1xuICB9XG5cbn1cbiIsIjxuZ3gtZ2FsbGVyeS1hcnJvd3MgKm5nSWY9XCJhcnJvd3NcIiAocHJldkNsaWNrKT1cInNob3dQcmV2KClcIiAobmV4dENsaWNrKT1cInNob3dOZXh0KClcIiBbcHJldkRpc2FibGVkXT1cIiFjYW5TaG93UHJldigpXCJcbiAgICAgICAgICAgICAgICAgICAgW25leHREaXNhYmxlZF09XCIhY2FuU2hvd05leHQoKVwiIFthcnJvd1ByZXZJY29uXT1cImFycm93UHJldkljb25cIlxuICAgICAgICAgICAgICAgICAgICBbYXJyb3dOZXh0SWNvbl09XCJhcnJvd05leHRJY29uXCI+PC9uZ3gtZ2FsbGVyeS1hcnJvd3M+XG48ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy10b3BcIj5cbiAgPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXByZXZpZXctaWNvbnNcIj5cbiAgICA8c3Bhbj5Fc3RpYyBwcm92YW50IG1vZGlmaWNhciBlbCBwbHVnaW48L3NwYW4+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGFjdGlvbnNcIiBbaWNvbl09XCJhY3Rpb24uaWNvblwiIFtkaXNhYmxlZF09XCJhY3Rpb24uZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlVGV4dF09XCJhY3Rpb24udGl0bGVUZXh0XCIgKGNsb3NlQ2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soJGV2ZW50LCBpbmRleClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgICA8YSAqbmdJZj1cImRvd25sb2FkICYmIHNyY1wiIFtocmVmXT1cInNyY1wiIGNsYXNzPVwibmd4LWdhbGxlcnktaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRvd25sb2FkPlxuICAgICAgPGkgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQge3sgZG93bmxvYWRJY29uIH19XCI+PC9pPlxuICAgIDwvYT5cbiAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0lmPVwiem9vbVwiIFtpY29uXT1cInpvb21PdXRJY29uXCIgW2Rpc2FibGVkXT1cIiFjYW5ab29tT3V0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlQ2xpY2spPVwiem9vbU91dCgpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdJZj1cInpvb21cIiBbaWNvbl09XCJ6b29tSW5JY29uXCIgW2Rpc2FibGVkXT1cIiFjYW5ab29tSW4oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VDbGljayk9XCJ6b29tSW4oKVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XCJyb3RhdGVcIiBbaWNvbl09XCJyb3RhdGVMZWZ0SWNvblwiIChjbG9zZUNsaWNrKT1cInJvdGF0ZUxlZnQoKVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgIDxuZ3gtZ2FsbGVyeS1hY3Rpb24gKm5nSWY9XCJyb3RhdGVcIiBbaWNvbl09XCJyb3RhdGVSaWdodEljb25cIiAoY2xvc2VDbGljayk9XCJyb3RhdGVSaWdodCgpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiAqbmdJZj1cImZ1bGxzY3JlZW5cIiBbaWNvbl09XCInbmd4LWdhbGxlcnktZnVsbHNjcmVlbiAnICsgZnVsbHNjcmVlbkljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlQ2xpY2spPVwibWFuYWdlRnVsbHNjcmVlbigpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgPG5neC1nYWxsZXJ5LWFjdGlvbiBbaWNvbl09XCInbmd4LWdhbGxlcnktY2xvc2UgJyArIGNsb3NlSWNvblwiIChjbG9zZUNsaWNrKT1cImNsb3NlKClcIj48L25neC1nYWxsZXJ5LWFjdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJuZ3gtc3Bpbm5lci13cmFwcGVyIG5neC1nYWxsZXJ5LWNlbnRlclwiIFtjbGFzcy5uZ3gtZ2FsbGVyeS1hY3RpdmVdPVwic2hvd1NwaW5uZXJcIj5cbiAgPGkgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29uIG5neC1nYWxsZXJ5LXNwaW5uZXIge3tzcGlubmVySWNvbn19XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy13cmFwcGVyXCIgKGNsaWNrKT1cImNsb3NlT25DbGljayAmJiBjbG9zZSgpXCIgKG1vdXNldXApPVwibW91c2VVcEhhbmRsZXIoJGV2ZW50KVwiXG4gICAgIChtb3VzZW1vdmUpPVwibW91c2VNb3ZlSGFuZGxlcigkZXZlbnQpXCIgKHRvdWNoZW5kKT1cIm1vdXNlVXBIYW5kbGVyKCRldmVudClcIiAodG91Y2htb3ZlKT1cIm1vdXNlTW92ZUhhbmRsZXIoJGV2ZW50KVwiPlxuICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy1pbWctd3JhcHBlclwiPlxuICAgIDxpbWcgKm5nSWY9XCJzcmMgJiYgdHlwZSA9PT0gJ2ltYWdlJ1wiICNwcmV2aWV3SW1hZ2UgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1wcmV2aWV3LWltZyBuZ3gtZ2FsbGVyeS1jZW50ZXJcIiBbc3JjXT1cInNyY1wiXG4gICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKG1vdXNlZW50ZXIpPVwiaW1hZ2VNb3VzZUVudGVyKClcIiAobW91c2VsZWF2ZSk9XCJpbWFnZU1vdXNlTGVhdmUoKVwiXG4gICAgICAgICAobW91c2Vkb3duKT1cIm1vdXNlRG93bkhhbmRsZXIoJGV2ZW50KVwiICh0b3VjaHN0YXJ0KT1cIm1vdXNlRG93bkhhbmRsZXIoJGV2ZW50KVwiXG4gICAgICAgICBbY2xhc3Mubmd4LWdhbGxlcnktYWN0aXZlXT1cIiFsb2FkaW5nXCIgW2NsYXNzLmFuaW1hdGlvbl09XCJhbmltYXRpb25cIiBbY2xhc3Mubmd4LWdhbGxlcnktZ3JhYl09XCJjYW5EcmFnT25ab29tKClcIlxuICAgICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCJnZXRUcmFuc2Zvcm0oKVwiIFtzdHlsZS5sZWZ0XT1cInBvc2l0aW9uTGVmdCArICdweCdcIiBbc3R5bGUudG9wXT1cInBvc2l0aW9uVG9wICsgJ3B4J1wiLz5cbiAgICA8dmlkZW8gKm5nSWY9XCJzcmMgJiYgdHlwZSA9PT0gJ3ZpZGVvJ1wiICAjcHJldmlld0ltYWdlIGNvbnRyb2xzIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIlxuICAgIGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy1pbWcgbmd4LWdhbGxlcnktY2VudGVyXCJcbiAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKG1vdXNlZW50ZXIpPVwiaW1hZ2VNb3VzZUVudGVyKClcIiAobW91c2VsZWF2ZSk9XCJpbWFnZU1vdXNlTGVhdmUoKVwiIChtb3VzZWRvd24pPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCIgKHRvdWNoc3RhcnQpPVwibW91c2VEb3duSGFuZGxlcigkZXZlbnQpXCJcbiAgICBbY2xhc3Mubmd4LWdhbGxlcnktYWN0aXZlXT1cIiFsb2FkaW5nXCIgW2NsYXNzLmFuaW1hdGlvbl09XCJhbmltYXRpb25cIiBbY2xhc3Mubmd4LWdhbGxlcnktZ3JhYl09XCJjYW5EcmFnT25ab29tKClcIiBbc3R5bGUudHJhbnNmb3JtXT1cImdldFRyYW5zZm9ybSgpXCIgW3N0eWxlLmxlZnRdPVwicG9zaXRpb25MZWZ0ICsgJ3B4J1wiIFtzdHlsZS50b3BdPVwicG9zaXRpb25Ub3AgKyAncHgnXCI+XG4gICAgICA8c291cmNlIFtzcmNdPVwic3JjXCI+XG4gICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgIDwvdmlkZW8+XG4gICAgPG5neC1nYWxsZXJ5LWJ1bGxldHMgKm5nSWY9XCJidWxsZXRzXCIgW2NvdW50XT1cImltYWdlcy5sZW5ndGhcIiBbYWN0aXZlXT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoYnVsbGV0Q2hhbmdlKT1cInNob3dBdEluZGV4KCRldmVudClcIj48L25neC1nYWxsZXJ5LWJ1bGxldHM+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcHJldmlldy10ZXh0XCIgKm5nSWY9XCJzaG93RGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+PC9kaXY+XG48L2Rpdj5cbiJdfQ==