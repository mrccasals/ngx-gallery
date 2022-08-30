import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild, HostListener, ViewEncapsulation, HostBinding, NgModule } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

class NgxGalleryService {
    constructor(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    manageSwipe(status, element, id, nextHandler, prevHandler) {
        const handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', () => nextHandler()),
                    this.renderer.listen(element.nativeElement, 'swiperight', () => prevHandler())
                ]);
            }
            else if (!status && handlers) {
                handlers.map((handler) => handler());
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) {
        }
    }
    validateUrl(url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        }
        else {
            return url;
        }
    }
    getBackgroundUrl(image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    }
    getFileType(fileSource) {
        const fileExtension = fileSource.split('.').pop().toLowerCase();
        if (fileExtension === 'avi' || fileExtension === 'flv'
            || fileExtension === 'wmv' || fileExtension === 'mov'
            || fileExtension === 'mp4') {
            return 'video';
        }
        return 'image';
    }
    getSwipeHandlers(id) {
        return this.swipeHandlers.get(id);
    }
    removeSwipeHandlers(id) {
        this.swipeHandlers.delete(id);
    }
}
NgxGalleryService.ɵfac = function NgxGalleryService_Factory(t) { return new (t || NgxGalleryService)(i0.ɵɵinject(i0.Renderer2)); };
NgxGalleryService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxGalleryService, factory: NgxGalleryService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();

class NgxGalleryActionComponent {
    constructor() {
        this.disabled = false;
        this.titleText = '';
        this.closeClick = new EventEmitter();
    }
    handleClick(event) {
        if (!this.disabled) {
            this.closeClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    }
}
NgxGalleryActionComponent.ɵfac = function NgxGalleryActionComponent_Factory(t) { return new (t || NgxGalleryActionComponent)(); };
NgxGalleryActionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryActionComponent, selectors: [["ngx-gallery-action"]], inputs: { icon: "icon", disabled: "disabled", titleText: "titleText" }, outputs: { closeClick: "closeClick" }, decls: 2, vars: 6, consts: [["aria-hidden", "true", 1, "ngx-gallery-icon", 3, "title", "click"]], template: function NgxGalleryActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function NgxGalleryActionComponent_Template_div_click_0_listener($event) { return ctx.handleClick($event); });
        i0.ɵɵelement(1, "i");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ngx-gallery-icon-disabled", ctx.disabled);
        i0.ɵɵpropertyInterpolate("title", ctx.titleText);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.icon, "");
    } }, styles: [".ngx-gallery-icon[_ngcontent-%COMP%]{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}.ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-icon[_ngcontent-%COMP%]   .ngx-gallery-icon-content[_ngcontent-%COMP%]{display:block}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryActionComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-action', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n     aria-hidden=\"true\"\n     title=\"{{ titleText }}\"\n     (click)=\"handleClick($event)\">\n  <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>\n", styles: [".ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}.ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}\n"] }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], disabled: [{
            type: Input
        }], titleText: [{
            type: Input
        }], closeClick: [{
            type: Output
        }] }); })();

class NgxGalleryArrowsComponent {
    constructor() {
        this.prevClick = new EventEmitter();
        this.nextClick = new EventEmitter();
    }
    handlePrevClick() {
        this.prevClick.emit();
    }
    handleNextClick() {
        this.nextClick.emit();
    }
}
NgxGalleryArrowsComponent.ɵfac = function NgxGalleryArrowsComponent_Factory(t) { return new (t || NgxGalleryArrowsComponent)(); };
NgxGalleryArrowsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryArrowsComponent, selectors: [["ngx-gallery-arrows"]], inputs: { prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon" }, outputs: { prevClick: "prevClick", nextClick: "nextClick" }, decls: 6, vars: 10, consts: [[1, "ngx-gallery-arrows-wrapper", "ngx-gallery-arrow-left"], ["aria-hidden", "true", 1, "ngx-gallery-icon", "ngx-gallery-arrow", 3, "click"], [1, "ngx-gallery-arrows-wrapper", "ngx-gallery-arrow-right"]], template: function NgxGalleryArrowsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_1_listener() { return ctx.handlePrevClick(); });
        i0.ɵɵelement(2, "i");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_4_listener() { return ctx.handleNextClick(); });
        i0.ɵɵelement(5, "i");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ngx-gallery-disabled", ctx.prevDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowPrevIcon, "");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("ngx-gallery-disabled", ctx.nextDisabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowNextIcon, "");
    } }, styles: [".ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{position:absolute;height:100%;width:1px;display:table;table-layout:fixed}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]   .ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{z-index:10001}.ngx-gallery-arrow-left[_ngcontent-%COMP%]{left:0}.ngx-gallery-arrow-right[_ngcontent-%COMP%]{right:0}.ngx-gallery-arrow[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled[_ngcontent-%COMP%]{opacity:.6;cursor:default}.ngx-gallery-arrow-left[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{left:10px}.ngx-gallery-arrow-right[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{right:10px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryArrowsComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-arrows', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-arrows-wrapper ngx-gallery-arrow-left\">\n  <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n    <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n  </div>\n</div>\n<div class=\"ngx-gallery-arrows-wrapper ngx-gallery-arrow-right\">\n  <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n    <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n  </div>\n</div>\n", styles: [".ngx-gallery-arrow-wrapper{position:absolute;height:100%;width:1px;display:table;table-layout:fixed}.ngx-gallery-preview-img-wrapper .ngx-gallery-arrow-wrapper{z-index:10001}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{top:50%;transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled{opacity:.6;cursor:default}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}\n"] }]
    }], function () { return []; }, { prevDisabled: [{
            type: Input
        }], nextDisabled: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], prevClick: [{
            type: Output
        }], nextClick: [{
            type: Output
        }] }); })();

const _c0$4 = function (a0) { return { "ngx-gallery-active": a0 }; };
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.handleChange($event, i_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0$4, i_r2 === ctx_r0.active));
} }
class NgxGalleryBulletsComponent {
    constructor() {
        this.active = 0;
        this.bulletChange = new EventEmitter();
    }
    getBullets() {
        return Array(this.count);
    }
    handleChange(event, index) {
        this.bulletChange.emit(index);
    }
}
NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) { return new (t || NgxGalleryBulletsComponent)(); };
NgxGalleryBulletsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryBulletsComponent, selectors: [["ngx-gallery-bullets"]], inputs: { count: "count", active: "active" }, outputs: { bulletChange: "bulletChange" }, decls: 1, vars: 1, consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]], template: function NgxGalleryBulletsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.getBullets());
    } }, directives: [i3.NgForOf, i3.NgClass], styles: ["[_nghost-%COMP%]{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translate(-50%);bottom:0;padding:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;cursor:pointer;background:white}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet[_ngcontent-%COMP%]:hover, .ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%]{background:black}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryBulletsComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-bullets', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\"\n     [ngClass]=\"{ 'ngx-gallery-active': i === active }\"></div>\n", styles: [":host{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translate(-50%);bottom:0;padding:10px}.ngx-gallery-bullet{width:10px;height:10px;border-radius:50%;cursor:pointer;background:white}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet:hover,.ngx-gallery-bullet.ngx-gallery-active{background:black}\n"] }]
    }], function () { return []; }, { count: [{
            type: Input
        }], active: [{
            type: Input
        }], bulletChange: [{
            type: Output
        }] }); })();

const _c0$3 = ["previewImage"];
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
class NgxGalleryPreviewComponent {
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
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) { return new (t || NgxGalleryPreviewComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NgxGalleryService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
NgxGalleryPreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryPreviewComponent, selectors: [["ngx-gallery-preview"]], viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$3, 5);
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
    } }, directives: [i3.NgIf, i3.NgForOf, NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent], styles: [".ngx-gallery-active[_nghost-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}[_nghost-%COMP%]{display:none;font-size:50px!important}[_nghost-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{font-size:50px!important}ngx-gallery-bullets[_ngcontent-%COMP%]{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{font-size:50px;left:0;display:inline-block}[_nghost-%COMP%]   .ngx-gallery-preview-top[_ngcontent-%COMP%]{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-page-row[_ngcontent-%COMP%]{padding-left:50%;color:#fff}.ngx-gallery-preview-icons[_ngcontent-%COMP%]{float:right}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon.ngx-gallery-icon-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryPreviewComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-preview', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ngx-gallery-arrows *ngIf=\"arrows\" (prevClick)=\"showPrev()\" (nextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\"\n                    [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n                    [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n    <div class=\"ngx-gallery-page-row\">{{index+1}} / {{images.length}}</div>\n  <div class=\"ngx-gallery-preview-icons\">\n    <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                        [titleText]=\"action.titleText\" (closeClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n    <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n      <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n    </a>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\"\n                        (closeClick)=\"zoomOut()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\"\n                        (closeClick)=\"zoomIn()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (closeClick)=\"rotateLeft()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (closeClick)=\"rotateRight()\"></ngx-gallery-action>\n    <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\"\n                        (closeClick)=\"manageFullscreen()\"></ngx-gallery-action>\n    <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (closeClick)=\"close()\"></ngx-gallery-action>\n  </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n  <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\"\n     (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n  <div class=\"ngx-gallery-preview-img-wrapper\">\n    <img *ngIf=\"src && type === 'image'\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\"\n         (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\"\n         (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n         [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\"\n         [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n    <video *ngIf=\"src && type === 'video'\"  #previewImage controls style=\"width: 100%; height: 100%;\"\n    class=\"ngx-gallery-preview-img ngx-gallery-center\"\n    (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\"\n    [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\">\n      <source [src]=\"src\">\n      Your browser does not support the video tag.\n    </video>\n    <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\"\n                         (bulletChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n  </div>\n  <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\"\n       (click)=\"$event.stopPropagation()\"></div>\n  <div class=\"ngx-gallery-preview-bottom\">\n    <ng-container *ngFor=\"let imag of images; let i=index\">\n      <img *ngIf=\"getTypeSrc(i) === 'image'\" [src]=\"getIndexSrc(i)\" style=\"width: auto; height: 150px; cursor: pointer;\" (click)=\"showAtIndex(i)\" />\n      <video *ngIf=\"getTypeSrc(i) === 'video'\"  #previewImage controls style=\"width: auto; height: 150px;\">\n        <source [src]=\"getIndexSrc(i)\">\n      </video>\n    </ng-container>\n  </div>\n</div>\n", styles: [":host.ngx-gallery-active{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}:host{display:none;font-size:50px!important}:host .ngx-gallery-arrow{font-size:50px!important}ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-page-row{padding-left:50%;color:#fff}.ngx-gallery-preview-icons{float:right}.ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ElementRef }, { type: NgxGalleryService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { images: [{
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

class NgxGalleryAnimation {
}
NgxGalleryAnimation.Fade = 'fade';
NgxGalleryAnimation.Slide = 'slide';
NgxGalleryAnimation.Rotate = 'rotate';
NgxGalleryAnimation.Zoom = 'zoom';

function NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 8);
    i0.ɵɵlistener("closeClick", function NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_closeClick_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const action_r9 = restoredCtx.$implicit; const image_r3 = i0.ɵɵnextContext(2).$implicit; return action_r9.onClick($event, image_r3.index); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r9 = ctx.$implicit;
    i0.ɵɵproperty("icon", action_r9.icon)("disabled", action_r9.disabled)("titleText", action_r9.titleText);
} }
function NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r8.descriptions[image_r3.index], i0.ɵɵsanitizeHtml);
} }
const _c0$2 = function (a0) { return { "ngx-gallery-clickable": a0 }; };
function NgxGalleryImageComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const image_r3 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.handleClick($event, image_r3.index); })("@animation.start", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_animation_animation_start_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.onStart($event); })("@animation.done", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_animation_animation_done_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.onDone($event); });
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template, 1, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", ctx_r5.getSafeUrl(image_r3.src));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0$2, ctx_r5.clickable))("@animation", ctx_r5.action);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r5.actions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showDescription && ctx_r5.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 8);
    i0.ɵɵlistener("closeClick", function NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_closeClick_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r26); const action_r23 = restoredCtx.$implicit; const image_r3 = i0.ɵɵnextContext(2).$implicit; return action_r23.onClick($event, image_r3.index); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r23 = ctx.$implicit;
    i0.ɵɵproperty("icon", action_r23.icon)("disabled", action_r23.disabled)("titleText", action_r23.titleText);
} }
function NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r22.descriptions[image_r3.index], i0.ɵɵsanitizeHtml);
} }
function NgxGalleryImageComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r31); const image_r3 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.handleClick($event, image_r3.index); })("@animation.start", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_animation_animation_start_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onStart($event); })("@animation.done", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_animation_animation_done_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onDone($event); });
    i0.ɵɵelementStart(1, "video", 10);
    i0.ɵɵelement(2, "source", 11);
    i0.ɵɵtext(3, " Your browser does not support the video tag. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtemplate(5, NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template, 1, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", ctx_r6.getSafeUrl(image_r3.src));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0$2, ctx_r6.clickable))("@animation", ctx_r6.action);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", image_r3.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r6.actions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.showDescription && ctx_r6.descriptions[image_r3.index]);
} }
function NgxGalleryImageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgxGalleryImageComponent_ng_container_1_div_1_Template, 4, 8, "div", 3);
    i0.ɵɵtemplate(2, NgxGalleryImageComponent_ng_container_1_div_2_Template, 7, 9, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", image_r3.type === "image" && image_r3.index === ctx_r0._selectedIndex);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", image_r3.type === "video" && image_r3.index === ctx_r0._selectedIndex);
} }
function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-bullets", 12);
    i0.ɵɵlistener("bulletChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_bulletChange_0_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.show($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("count", ctx_r1.images.length)("active", ctx_r1._selectedIndex);
} }
function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-arrows", 13);
    i0.ɵɵlistener("prevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_prevClick_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.showPrev(); })("nextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_nextClick_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.showNext(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ngx-gallery-image-size-", ctx_r2.size, "");
    i0.ɵɵproperty("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
} }
class NgxGalleryImageComponent {
    constructor(sanitization, changeDetectorRef, elementRef, helperService) {
        this.sanitization = sanitization;
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.imageClick = new EventEmitter();
        this.activeChange = new EventEmitter();
        this.animating = new EventEmitter();
        this.canChangeImage = true;
        this.isAnimating = false;
        this.changeDetectorRef = changeDetectorRef;
        this.action = 'none';
    }
    set selectedIndex(index) {
        if (index > this._selectedIndex) {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideRight';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateRight';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
        }
        else if (index < this._selectedIndex) {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
        }
        this._selectedIndex = index;
    }
    // @HostBinding('style.display') public display = 'inline-block';
    // @HostBinding('style.background-color') public color = 'lime';
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', () => this.showNext(), () => this.showPrev());
        }
    }
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    reset(index) {
        this._selectedIndex = index;
        this.action = 'none';
    }
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.lazyLoading) {
            const indexes = [this._selectedIndex];
            const prevIndex = this._selectedIndex - 1;
            if (prevIndex === -1 && this.infinityMove) {
                indexes.push(this.images.length - 1);
            }
            else if (prevIndex >= 0) {
                indexes.push(prevIndex);
            }
            const nextIndex = this._selectedIndex + 1;
            if (nextIndex === this.images.length && this.infinityMove) {
                indexes.push(0);
            }
            else if (nextIndex < this.images.length) {
                indexes.push(nextIndex);
            }
            return this.images.filter((img, i) => indexes.indexOf(i) !== -1);
        }
        else {
            return this.images;
        }
    }
    startAutoPlay() {
        this.stopAutoPlay();
        this.timer = setInterval(() => {
            if (!this.showNext()) {
                this._selectedIndex = -1;
                this.showNext();
            }
        }, this.autoPlayInterval);
    }
    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    handleClick(event, index) {
        if (this.clickable) {
            this.imageClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    }
    show(index) {
        if (this.isAnimating) {
            return;
        }
        if (index > this._selectedIndex) {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideRight';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateRight';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
        }
        else {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
        }
        this._selectedIndex = index;
        this.activeChange.emit(this._selectedIndex);
        this.setChangeTimeout();
    }
    setAction(action) {
        this.action = action;
        this.changeDetectorRef.detectChanges();
    }
    showNext() {
        if (this.isAnimating) {
            return false;
        }
        if (this.canShowNext() && this.canChangeImage) {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideRight';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateRight';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
            this._selectedIndex++;
            if (this._selectedIndex === this.images.length) {
                this._selectedIndex = 0;
            }
            this.activeChange.emit(this._selectedIndex);
            this.setChangeTimeout();
            return true;
        }
        else {
            return false;
        }
    }
    showPrev() {
        if (this.isAnimating) {
            return;
        }
        if (this.canShowPrev() && this.canChangeImage) {
            let action;
            if (this.animation === NgxGalleryAnimation.Slide) {
                action = 'slideLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Fade) {
                action = 'fade';
            }
            else if (this.animation === NgxGalleryAnimation.Rotate) {
                action = 'rotateLeft';
            }
            else if (this.animation === NgxGalleryAnimation.Zoom) {
                action = 'zoom';
            }
            this.setAction(action);
            this._selectedIndex--;
            if (this._selectedIndex < 0) {
                this._selectedIndex = this.images.length - 1;
            }
            this.activeChange.emit(this._selectedIndex);
            this.setChangeTimeout();
        }
    }
    setChangeTimeout() {
        this.canChangeImage = false;
        let timeout = 1000;
        if (this.animation === NgxGalleryAnimation.Slide
            || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
        }
        setTimeout(() => {
            this.canChangeImage = true;
        }, timeout);
    }
    canShowNext() {
        if (this.images) {
            return this.infinityMove || this._selectedIndex < this.images.length - 1;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.images) {
            return this.infinityMove || this._selectedIndex > 0;
        }
        else {
            return false;
        }
    }
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image.toString()));
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource);
    }
    onStart(event) {
        this.isAnimating = true;
        this.animating.emit(true);
    }
    onDone(event) {
        this.isAnimating = false;
        this.animating.emit(false);
    }
}
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) { return new (t || NgxGalleryImageComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NgxGalleryService)); };
NgxGalleryImageComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryImageComponent, selectors: [["ngx-gallery-image"]], hostBindings: function NgxGalleryImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function NgxGalleryImageComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryImageComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { images: "images", clickable: "clickable", selectedIndex: "selectedIndex", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", swipe: "swipe", animation: "animation", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", autoPlay: "autoPlay", autoPlayInterval: "autoPlayInterval", autoPlayPauseOnHover: "autoPlayPauseOnHover", infinityMove: "infinityMove", lazyLoading: "lazyLoading", actions: "actions", descriptions: "descriptions", showDescription: "showDescription", bullets: "bullets" }, outputs: { imageClick: "imageClick", activeChange: "activeChange", animating: "animating" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[4, "ngFor", "ngForOf"], [3, "count", "active", "bulletChange", 4, "ngIf"], [3, "class", "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], ["class", "ngx-gallery-image", 3, "ngClass", "background-image", "click", 4, "ngIf"], [1, "ngx-gallery-image", 3, "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-image-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "icon", "disabled", "titleText", "closeClick"], [1, "ngx-gallery-image-text", 3, "innerHTML", "click"], ["controls", "", 2, "width", "100%", "height", "100%", "background", "#000"], [3, "src"], [3, "count", "active", "bulletChange"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"]], template: function NgxGalleryImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, NgxGalleryImageComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
        i0.ɵɵtemplate(2, NgxGalleryImageComponent_ngx_gallery_bullets_2_Template, 1, 2, "ngx-gallery-bullets", 1);
        i0.ɵɵtemplate(3, NgxGalleryImageComponent_ngx_gallery_arrows_3_Template, 1, 7, "ngx-gallery-arrows", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate2("ngx-gallery-image-wrapper ngx-gallery-animation-", ctx.animation, " ngx-gallery-image-size-", ctx.size, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.getImages());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.bullets);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.arrows);
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgClass, NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:1;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1) rotate(0);left:0;opacity:1}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1);left:0;opacity:1}.ngx-gallery-image-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"], data: { animation: [
            trigger('animation', [
                // ...
                state('slideRight', style({})),
                state('slideLeft', style({})),
                state('fade', style({})),
                state('rotateLeft', style({})),
                state('rotateRight', style({})),
                state('zoom', style({})),
                transition('slideRight => void', [
                    animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))
                ]),
                transition('void => slideRight', [
                    style({ transform: 'translateX(100%)' }),
                    animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
                ]),
                transition('slideLeft => void', [
                    animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
                ]),
                transition('void => slideLeft', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
                ]),
                transition('fade => void', [
                    animate('500ms ease-in-out', style({ opacity: '0' }))
                ]),
                transition('void => fade', [
                    style({ opacity: '0' }),
                    animate('500ms ease-in-out', style({ opacity: '1' }))
                ]),
                transition('rotateLeft => void', [
                    animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(-90deg)', opacity: '0' }))
                ]),
                transition('void => rotateLeft', [
                    style({ transform: 'scale(1, 1) rotate(-90deg)', opacity: '0' }),
                    animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(0deg)', opacity: '1' }))
                ]),
                transition('rotateRight => void', [
                    animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(90deg)', opacity: '0' }))
                ]),
                transition('void => rotateRight', [
                    style({ transform: 'scale(1, 1) rotate(90deg)', opacity: '0' }),
                    animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(0deg)', opacity: '1' }))
                ]),
                transition('zoom => void', [
                    animate('500ms ease-in-out', style({ transform: 'scale(2.5,2.5)', opacity: '0' }))
                ]),
                transition('void => zoom', [
                    style({ transform: 'scale(2.5,2.5)', opacity: '0' }),
                    animate('500ms ease-in-out', style({ transform: 'scale(1, 1)', opacity: '1' }))
                ]),
            ]),
        ] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryImageComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-image', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('animation', [
                        // ...
                        state('slideRight', style({})),
                        state('slideLeft', style({})),
                        state('fade', style({})),
                        state('rotateLeft', style({})),
                        state('rotateRight', style({})),
                        state('zoom', style({})),
                        transition('slideRight => void', [
                            animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))
                        ]),
                        transition('void => slideRight', [
                            style({ transform: 'translateX(100%)' }),
                            animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
                        ]),
                        transition('slideLeft => void', [
                            animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
                        ]),
                        transition('void => slideLeft', [
                            style({ transform: 'translateX(-100%)' }),
                            animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
                        ]),
                        transition('fade => void', [
                            animate('500ms ease-in-out', style({ opacity: '0' }))
                        ]),
                        transition('void => fade', [
                            style({ opacity: '0' }),
                            animate('500ms ease-in-out', style({ opacity: '1' }))
                        ]),
                        transition('rotateLeft => void', [
                            animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(-90deg)', opacity: '0' }))
                        ]),
                        transition('void => rotateLeft', [
                            style({ transform: 'scale(1, 1) rotate(-90deg)', opacity: '0' }),
                            animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(0deg)', opacity: '1' }))
                        ]),
                        transition('rotateRight => void', [
                            animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(90deg)', opacity: '0' }))
                        ]),
                        transition('void => rotateRight', [
                            style({ transform: 'scale(1, 1) rotate(90deg)', opacity: '0' }),
                            animate('500ms ease-in-out', style({ transform: 'scale(1, 1) rotate(0deg)', opacity: '1' }))
                        ]),
                        transition('zoom => void', [
                            animate('500ms ease-in-out', style({ transform: 'scale(2.5,2.5)', opacity: '0' }))
                        ]),
                        transition('void => zoom', [
                            style({ transform: 'scale(2.5,2.5)', opacity: '0' }),
                            animate('500ms ease-in-out', style({ transform: 'scale(1, 1)', opacity: '1' }))
                        ]),
                    ]),
                ], template: "<div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n  <ng-container *ngFor=\"let image of getImages(); let i = index;\">\n\n    <div *ngIf=\"image.type === 'image' && image.index === _selectedIndex\" class=\"ngx-gallery-image\"\n         [ngClass]=\"{'ngx-gallery-clickable': clickable }\"\n         [style.background-image]=\"getSafeUrl(image.src)\"\n         (click)=\"handleClick($event, image.index)\"\n         [@animation]=\"action\"\n         (@animation.start)=\"onStart($event)\"\n         (@animation.done)=\"onDone($event)\">\n      <div class=\"ngx-gallery-icons-wrapper\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                            [titleText]=\"action.titleText\"\n                            (closeClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n      </div>\n      <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\"\n          [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n    </div>\n\n    <div *ngIf=\"image.type === 'video' && image.index === _selectedIndex\" class=\"ngx-gallery-image\"\n         [ngClass]=\"{'ngx-gallery-clickable': clickable }\"\n         [style.background-image]=\"getSafeUrl(image.src)\"\n         (click)=\"handleClick($event, image.index)\"\n         [@animation]=\"action\"\n         (@animation.start)=\"onStart($event)\"\n         (@animation.done)=\"onDone($event)\">\n      <video controls style=\"width:100%; height:100%; background: #000;\">\n        <source [src]=\"image.src\">\n          Your browser does not support the video tag.\n      </video>\n      <div class=\"ngx-gallery-icons-wrapper\">\n      <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                          [titleText]=\"action.titleText\"\n                          (closeClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n      </div>\n      <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\"\n          [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n      </div>\n\n\n  </ng-container>\n  <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"_selectedIndex\"\n                       (bulletChange)=\"show($event)\"></ngx-gallery-bullets>\n  <ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (prevClick)=\"showPrev()\"\n                      (nextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\"\n                      [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n</div>\n", styles: [":host{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-image-wrapper{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:1;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-rotate .ngx-gallery-image{transition:1s ease;transform:scale(1) rotate(0);left:0;opacity:1}.ngx-gallery-animation-zoom .ngx-gallery-image{transition:1s ease;transform:scale(1);left:0;opacity:1}.ngx-gallery-image-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: NgxGalleryService }]; }, { images: [{
            type: Input
        }], clickable: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], arrows: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], swipe: [{
            type: Input
        }], animation: [{
            type: Input
        }], size: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], autoPlay: [{
            type: Input
        }], autoPlayInterval: [{
            type: Input
        }], autoPlayPauseOnHover: [{
            type: Input
        }], infinityMove: [{
            type: Input
        }], lazyLoading: [{
            type: Input
        }], actions: [{
            type: Input
        }], descriptions: [{
            type: Input
        }], showDescription: [{
            type: Input
        }], bullets: [{
            type: Input
        }], imageClick: [{
            type: Output
        }], activeChange: [{
            type: Output
        }], animating: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class NgxGalleryOrder {
}
NgxGalleryOrder.Column = 1;
NgxGalleryOrder.Row = 2;
NgxGalleryOrder.Page = 3;

const _c0$1 = function (a0, a1) { return { "ngx-gallery-active": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_a_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r2 = ctx_r8.$implicit;
    const i_r3 = ctx_r8.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", ctx_r4.getSafeUrl(image_r2));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0$1, i_r3 === ctx_r4.selectedIndex, ctx_r4.clickable));
} }
function NgxGalleryThumbnailsComponent_a_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "video", 11);
    i0.ɵɵelement(2, "source", 12);
    i0.ɵɵtext(3, " Your browser does not support the video tag. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const i_r3 = ctx_r9.index;
    const image_r2 = ctx_r9.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0$1, i_r3 === ctx_r5.selectedIndex, ctx_r5.clickable));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", image_r2, i0.ɵɵsanitizeUrl);
} }
function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-action", 13);
    i0.ɵɵlistener("closeClick", function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template_ngx_gallery_action_closeClick_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const action_r10 = restoredCtx.$implicit; const i_r3 = i0.ɵɵnextContext().index; return action_r10.onClick($event, i_r3); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r10 = ctx.$implicit;
    i0.ɵɵproperty("icon", action_r10.icon)("disabled", action_r10.disabled)("titleText", action_r10.titleText);
} }
function NgxGalleryThumbnailsComponent_a_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", ctx_r7.remainingCountValue, "");
} }
function NgxGalleryThumbnailsComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function NgxGalleryThumbnailsComponent_a_2_Template_a_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r15); const i_r3 = restoredCtx.index; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.handleClick($event, i_r3); });
    i0.ɵɵtemplate(1, NgxGalleryThumbnailsComponent_a_2_div_1_Template, 1, 6, "div", 4);
    i0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_a_2_div_2_Template, 4, 5, "div", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtemplate(4, NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template, 1, 3, "ngx-gallery-action", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NgxGalleryThumbnailsComponent_a_2_div_5_Template, 3, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));
    i0.ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", i0.ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", i0.ɵɵpureFunction2(16, _c0$1, i_r3 === ctx_r0.selectedIndex, ctx_r0.clickable));
    i0.ɵɵattribute("aria-label", ctx_r0.labels[i_r3]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) === "image");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) === "video");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.actions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.remainingCount && ctx_r0.remainingCountValue && i_r3 === ctx_r0.rows * ctx_r0.columns - 1);
} }
function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    i0.ɵɵlistener("prevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_prevClick_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.moveLeft(); })("nextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_nextClick_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.moveRight(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
} }
class NgxGalleryThumbnailsComponent {
    constructor(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.activeChange = new EventEmitter();
        this.index = 0;
    }
    ngOnChanges(changes) {
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', () => this.moveRight(), () => this.moveLeft());
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - (this.rows * this.columns);
        }
    }
    onMouseEnter() {
        this.mouseenter = true;
    }
    onMouseLeave() {
        this.mouseenter = false;
    }
    reset(index) {
        this.selectedIndex = index;
        this.setDefaultPosition();
        this.index = 0;
        this.validateIndex();
    }
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
        }
        else if (this.lazyLoading && this.order !== NgxGalleryOrder.Row) {
            let stopIndex = 0;
            if (this.order === NgxGalleryOrder.Column) {
                stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                stopIndex = this.index + ((this.columns * this.rows) * 2);
            }
            if (stopIndex <= this.minStopIndex) {
                stopIndex = this.minStopIndex;
            }
            else {
                this.minStopIndex = stopIndex;
            }
            return this.images.slice(0, stopIndex);
        }
        else {
            return this.images;
        }
    }
    handleClick(event, index) {
        if (!this.hasLink(index) && !this.isAnimating) {
            this.selectedIndex = index;
            this.activeChange.emit(index);
        }
        event.stopPropagation();
        event.preventDefault();
    }
    hasLink(index) {
        return !!(this.links && this.links.length && this.links[index]);
    }
    moveRight() {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            const maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    }
    moveLeft() {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    }
    canMoveRight() {
        return this.index + this.columns < this.getMaxIndex();
    }
    canMoveLeft() {
        return this.index !== 0;
    }
    getThumbnailLeft(index) {
        let calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
        }
        else if (this.order === NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = index % this.columns;
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    }
    getThumbnailTop(index) {
        let calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
        }
        else if (this.order === NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = Math.floor(index / this.columns);
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    }
    getThumbnailWidth() {
        return this.getThumbnailDimension(this.columns);
    }
    getThumbnailHeight() {
        return this.getThumbnailDimension(this.rows);
    }
    setThumbnailsPosition() {
        this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
        this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px';
    }
    setDefaultPosition() {
        this.thumbnailsLeft = '0px';
        this.thumbnailsMarginLeft = '0px';
    }
    canShowArrows() {
        if (this.remainingCount) {
            return false;
        }
        else {
            return this.arrows && this.images && this.images.length > this.getVisibleCount()
                && (!this.arrowsAutoHide || this.mouseenter);
        }
    }
    validateIndex() {
        if (this.images) {
            let newIndex;
            if (this.order === NgxGalleryOrder.Column) {
                newIndex = Math.floor(this.selectedIndex / this.rows);
            }
            else {
                newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
            }
            if (this.remainingCount) {
                newIndex = 0;
            }
            if (newIndex < this.index || newIndex >= this.index + this.columns) {
                const maxIndex = this.getMaxIndex() - this.columns;
                this.index = newIndex > maxIndex ? maxIndex : newIndex;
                this.setThumbnailsPosition();
            }
        }
    }
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image.toString()));
    }
    getFileType(fileSource) {
        return this.helperService.getFileType(fileSource.toString());
    }
    getThumbnailPosition(index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    }
    getThumbnailDimension(count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    }
    getMaxIndex() {
        if (this.order === NgxGalleryOrder.Page) {
            let maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
            if (this.images.length % this.getVisibleCount() > this.columns) {
                maxIndex += this.columns;
            }
            else {
                maxIndex += this.images.length % this.getVisibleCount();
            }
            return maxIndex;
        }
        else {
            return Math.ceil(this.images.length / this.rows);
        }
    }
    getVisibleCount() {
        return this.columns * this.rows;
    }
    getSafeStyle(value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    }
}
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) { return new (t || NgxGalleryThumbnailsComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NgxGalleryService)); };
NgxGalleryThumbnailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryThumbnailsComponent, selectors: [["ngx-gallery-thumbnails"]], hostBindings: function NgxGalleryThumbnailsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function NgxGalleryThumbnailsComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NgxGalleryThumbnailsComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { images: "images", isAnimating: "isAnimating", links: "links", labels: "labels", linkTarget: "linkTarget", columns: "columns", rows: "rows", arrows: "arrows", arrowsAutoHide: "arrowsAutoHide", margin: "margin", selectedIndex: "selectedIndex", clickable: "clickable", swipe: "swipe", size: "size", arrowPrevIcon: "arrowPrevIcon", arrowNextIcon: "arrowNextIcon", moveSize: "moveSize", order: "order", remainingCount: "remainingCount", lazyLoading: "lazyLoading", actions: "actions" }, outputs: { activeChange: "activeChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[1, "ngx-gallery-thumbnails"], ["class", "ngx-gallery-thumbnail", 3, "href", "target", "width", "height", "left", "top", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 3, "href", "target", "ngClass", "click"], ["class", "ngx-gallery-thumbnail", "style", "width: 100%; height: 100%; position:absolute;", 3, "background-image", "ngClass", 4, "ngIf"], ["class", "ngx-gallery-thumbnail-video", 4, "ngIf"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-remaining-count-overlay", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 2, "width", "100%", "height", "100%", "position", "absolute", 3, "ngClass"], [1, "ngx-gallery-thumbnail-video"], [1, "ngx-gallery-thumbnail", 2, "width", "100%", "height", "100%", "position", "absolute", "left", "0", "background", "#000", 3, "ngClass"], [3, "src"], [3, "icon", "disabled", "titleText", "closeClick"], [1, "ngx-gallery-remaining-count-overlay"], [1, "ngx-gallery-remaining-count"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"]], template: function NgxGalleryThumbnailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, NgxGalleryThumbnailsComponent_a_2_Template, 6, 19, "a", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template, 1, 4, "ngx-gallery-arrows", 2);
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-", ctx.size, "");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("transform", "translateX(" + ctx.thumbnailsLeft + ")")("margin-left", ctx.thumbnailsMarginLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.getImages());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canShowArrows());
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgClass, NgxGalleryActionComponent, NgxGalleryArrowsComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .ngx-gallery-thumbnail-video[_ngcontent-%COMP%]:after{content:\"\\f144\";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-size:cover;height:100%}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail.ngx-gallery-active[_ngcontent-%COMP%]{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryThumbnailsComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-thumbnails', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n  <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\"\n       [style.marginLeft]=\"thumbnailsMarginLeft\">\n    <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\"\n       *ngFor=\"let image of getImages(); let i = index;\"\n       (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\"\n       [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\"\n       [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n       [attr.aria-label]=\"labels[i]\">\n       <div *ngIf=\"getFileType(image) === 'image'\" [style.background-image]=\"getSafeUrl(image)\" class=\"ngx-gallery-thumbnail\"\n       [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n       style=\"width: 100%; height: 100%; position:absolute;\"></div>\n       <div *ngIf=\"getFileType(image) === 'video'\" class=\"ngx-gallery-thumbnail-video\">\n        <video  class=\"ngx-gallery-thumbnail\" [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n        style=\"width: 100%; height: 100%; position:absolute; left:0; background:#000;\">\n        <source [src]=\"image\">\n          Your browser does not support the video tag.\n       </video>\n      </div>\n       <div class=\"ngx-gallery-icons-wrapper\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                            [titleText]=\"action.titleText\" (closeClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n      </div>\n      <div class=\"ngx-gallery-remaining-count-overlay\"\n           *ngIf=\"remainingCount && remainingCountValue && (i === (rows * columns) - 1)\">\n        <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n      </div>\n    </a>\n  </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (prevClick)=\"moveLeft()\" (nextClick)=\"moveRight()\"\n                    [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n                    [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n", styles: ["@charset \"UTF-8\";:host{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .ngx-gallery-thumbnail-video:after{content:\"\\f144\";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .img{background-size:cover;height:100%}.ngx-gallery-thumbnails .ngx-gallery-thumbnail.ngx-gallery-active{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ElementRef }, { type: NgxGalleryService }]; }, { images: [{
            type: Input
        }], isAnimating: [{
            type: Input
        }], links: [{
            type: Input
        }], labels: [{
            type: Input
        }], linkTarget: [{
            type: Input
        }], columns: [{
            type: Input
        }], rows: [{
            type: Input
        }], arrows: [{
            type: Input
        }], arrowsAutoHide: [{
            type: Input
        }], margin: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], clickable: [{
            type: Input
        }], swipe: [{
            type: Input
        }], size: [{
            type: Input
        }], arrowPrevIcon: [{
            type: Input
        }], arrowNextIcon: [{
            type: Input
        }], moveSize: [{
            type: Input
        }], order: [{
            type: Input
        }], remainingCount: [{
            type: Input
        }], lazyLoading: [{
            type: Input
        }], actions: [{
            type: Input
        }], activeChange: [{
            type: Output
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

class NgxGalleryAction {
    constructor(action) {
        this.icon = action.icon;
        this.disabled = action.disabled ? action.disabled : false;
        this.titleText = action.titleText ? action.titleText : '';
        this.onClick = action.onClick;
    }
}

class NgxGalleryLayout {
}
NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';

class NgxGalleryImageSize {
}
NgxGalleryImageSize.Cover = 'cover';
NgxGalleryImageSize.Contain = 'contain';

class NgxGalleryOptions {
    constructor(obj) {
        const preventDefaults = obj.breakpoint === undefined ? false : true;
        function use(source, defaultValue) {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }
        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);
        this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
        this.startIndex = use(obj.startIndex, 0);
        this.linkTarget = use(obj.linkTarget, '_blank');
        this.lazyLoading = use(obj.lazyLoading, true);
        this.image = use(obj.image, true);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageAutoPlay = use(obj.imageAutoPlay, false);
        this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
        this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
        this.imageInfinityMove = use(obj.imageInfinityMove, false);
        if (obj && obj.imageActions && obj.imageActions.length) {
            obj.imageActions = obj.imageActions.map(action => new NgxGalleryAction(action));
        }
        this.imageActions = use(obj.imageActions, []);
        this.imageDescription = use(obj.imageDescription, false);
        this.imageBullets = use(obj.imageBullets, false);
        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
        this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
        this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
        this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
        this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
        if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
            obj.thumbnailActions = obj.thumbnailActions.map(action => new NgxGalleryAction(action));
        }
        this.thumbnailActions = use(obj.thumbnailActions, []);
        this.thumbnailClasses = use(obj.thumbnailClasses, []);
        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewArrows = use(obj.previewArrows, true);
        this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
        this.previewAnimation = use(obj.previewAnimation, true);
        this.previewAutoPlay = use(obj.previewAutoPlay, false);
        this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
        this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
        this.previewInfinityMove = use(obj.previewInfinityMove, false);
        this.previewZoom = use(obj.previewZoom, false);
        this.previewZoomStep = use(obj.previewZoomStep, 0.1);
        this.previewZoomMax = use(obj.previewZoomMax, 2);
        this.previewZoomMin = use(obj.previewZoomMin, 0.5);
        this.previewRotate = use(obj.previewRotate, false);
        this.previewDownload = use(obj.previewDownload, false);
        this.previewCustom = use(obj.previewCustom, undefined);
        this.previewBullets = use(obj.previewBullets, false);
        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
        this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
        this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
        this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
        this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
        this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
        if (obj && obj.actions && obj.actions.length) {
            obj.actions = obj.actions.map(action => new NgxGalleryAction(action));
        }
        this.actions = use(obj.actions, []);
    }
}

class NgxGalleryOrderedImage {
    constructor(obj) {
        this.src = obj.src;
        this.type = obj.type;
        this.index = obj.index;
    }
}

function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-image", 3);
    i0.ɵɵlistener("imageClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_imageClick_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.openPreview($event); })("activeChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_activeChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.selectFromImage($event); })("animating", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_animating_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setAnimating($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r0.getImageHeight());
    i0.ɵɵproperty("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
} }
const _c0 = function () { return []; };
function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-gallery-thumbnails", 4);
    i0.ɵɵlistener("activeChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_activeChange_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.selectFromThumbnails($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());
    i0.ɵɵproperty("images", ctx_r1.smallImages)("isAnimating", ctx_r1.isAnimating)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : i0.ɵɵpureFunction0(28, _c0))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions)("ngClass", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailClasses);
} }
class NgxGalleryComponent {
    constructor(myElement, helperService) {
        this.myElement = myElement;
        this.helperService = helperService;
        this.options = [{}];
        this.imagesReady = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.change = new EventEmitter();
        this.previewOpen = new EventEmitter();
        this.previewClose = new EventEmitter();
        this.previewChange = new EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    ngOnInit() {
        this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = this.currentOptions.startIndex;
        }
    }
    ngDoCheck() {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset(this.currentOptions.startIndex);
            }
            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                && this.images.length <= 1) {
                this.currentOptions.thumbnails = false;
                this.currentOptions.imageArrows = false;
            }
            this.resetThumbnails();
        }
    }
    ngAfterViewInit() {
        this.checkFullWidth();
    }
    onResize() {
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(() => {
                this.checkFullWidth();
            }, 200);
        }
    }
    getImageHeight() {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    }
    getThumbnailsHeight() {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    }
    getThumbnailsMarginTop() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    getThumbnailsMarginBottom() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    openPreview(index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    }
    onPreviewOpen() {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    }
    onPreviewClose() {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    }
    selectFromImage(index) {
        this.select(index);
    }
    selectFromThumbnails(index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    }
    show(index) {
        this.select(index);
    }
    showNext() {
        this.image.showNext();
    }
    showPrev() {
        this.image.showPrev();
    }
    canShowNext() {
        if (this.images && this.currentOptions) {
            return !!(this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1);
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.images && this.currentOptions) {
            return !!(this.currentOptions.imageInfinityMove || this.selectedIndex > 0);
        }
        else {
            return false;
        }
    }
    previewSelect(index) {
        this.previewChange.emit({ index, image: this.images[index] });
    }
    moveThumbnailsRight() {
        this.thumbnails.moveRight();
    }
    moveThumbnailsLeft() {
        this.thumbnails.moveLeft();
    }
    canMoveThumbnailsRight() {
        return this.thumbnails.canMoveRight();
    }
    canMoveThumbnailsLeft() {
        return this.thumbnails.canMoveLeft();
    }
    resetThumbnails() {
        if (this.thumbnails) {
            this.thumbnails.reset(this.currentOptions.startIndex);
        }
    }
    select(index) {
        this.selectedIndex = index;
        this.change.emit({
            index,
            image: this.images[index]
        });
    }
    checkFullWidth() {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = 'translateX(' + (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px)';
        }
    }
    setImages() {
        this.images.forEach((img) => img.type = this.helperService.getFileType(img.url || img.big || img.medium || img.small || ''));
        this.smallImages = this.images.map((img) => img.small);
        this.mediumImages = this.images.map((img, i) => new NgxGalleryOrderedImage({
            src: img.medium,
            type: img.type,
            index: i
        }));
        this.bigImages = this.images.map((img) => img.big);
        this.descriptions = this.images.map((img) => img.description);
        this.links = this.images.map((img) => img.url);
        this.labels = this.images.map((img) => img.label);
    }
    setBreakpoint() {
        this.prevBreakpoint = this.breakpoint;
        let breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter((opt) => opt.breakpoint >= window.innerWidth)
                .map((opt) => opt.breakpoint);
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    }
    sortOptions() {
        this.options = [
            ...this.options.filter((a) => a.breakpoint === undefined),
            ...this.options
                .filter((a) => a.breakpoint !== undefined)
                .sort((a, b) => b.breakpoint - a.breakpoint)
        ];
    }
    setOptions() {
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter((opt) => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint)
            .map((opt) => this.combineOptions(this.currentOptions, opt));
        this.width = this.currentOptions.width;
        this.height = this.currentOptions.height;
    }
    combineOptions(first, second) {
        Object.keys(second).map((val) => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
    setAnimating(event) {
        this.isAnimating = event;
    }
}
NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) { return new (t || NgxGalleryComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(NgxGalleryService)); };
NgxGalleryComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxGalleryComponent, selectors: [["ngx-gallery"]], viewQuery: function NgxGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(NgxGalleryPreviewComponent, 5);
        i0.ɵɵviewQuery(NgxGalleryImageComponent, 5);
        i0.ɵɵviewQuery(NgxGalleryThumbnailsComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.preview = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.image = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnails = _t.first);
    } }, hostVars: 6, hostBindings: function NgxGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function NgxGalleryComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width)("height", ctx.height)("transform", ctx.left);
    } }, inputs: { options: "options", images: "images" }, outputs: { imagesReady: "imagesReady", change: "change", previewOpen: "previewOpen", previewClose: "previewClose", previewChange: "previewChange" }, features: [i0.ɵɵProvidersFeature([NgxGalleryService])], decls: 4, vars: 41, consts: [[3, "height", "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "imageClick", "activeChange", "animating", 4, "ngIf"], [3, "marginTop", "marginBottom", "height", "images", "isAnimating", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "ngClass", "activeChange", 4, "ngIf"], [3, "images", "descriptions", "showDescription", "arrowPrevIcon", "arrowNextIcon", "closeIcon", "fullscreenIcon", "spinnerIcon", "arrows", "arrowsAutoHide", "swipe", "fullscreen", "forceFullscreen", "closeOnClick", "closeOnEsc", "keyboardNavigation", "animation", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "zoom", "zoomStep", "zoomMax", "zoomMin", "zoomInIcon", "zoomOutIcon", "actions", "rotate", "rotateLeftIcon", "rotateRightIcon", "download", "downloadIcon", "bullets", "previewClose", "previewOpen", "activeChange"], [3, "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "imageClick", "activeChange", "animating"], [3, "images", "isAnimating", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "ngClass", "activeChange"]], template: function NgxGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, NgxGalleryComponent_ngx_gallery_image_1_Template, 1, 21, "ngx-gallery-image", 0);
        i0.ɵɵtemplate(2, NgxGalleryComponent_ngx_gallery_thumbnails_2_Template, 1, 29, "ngx-gallery-thumbnails", 1);
        i0.ɵɵelementStart(3, "ngx-gallery-preview", 2);
        i0.ɵɵlistener("previewClose", function NgxGalleryComponent_Template_ngx_gallery_preview_previewClose_3_listener() { return ctx.onPreviewClose(); })("previewOpen", function NgxGalleryComponent_Template_ngx_gallery_preview_previewOpen_3_listener() { return ctx.onPreviewOpen(); })("activeChange", function NgxGalleryComponent_Template_ngx_gallery_preview_activeChange_3_listener($event) { return ctx.previewSelect($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMapInterpolate1("ngx-gallery-layout ", ctx.currentOptions == null ? null : ctx.currentOptions.layout, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.image);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.thumbnails);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ngx-gallery-active", ctx.previewEnabled);
        i0.ɵɵproperty("images", ctx.bigImages)("descriptions", ctx.descriptions)("showDescription", ctx.currentOptions == null ? null : ctx.currentOptions.previewDescription)("arrowPrevIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowNextIcon)("closeIcon", ctx.currentOptions == null ? null : ctx.currentOptions.closeIcon)("fullscreenIcon", ctx.currentOptions == null ? null : ctx.currentOptions.fullscreenIcon)("spinnerIcon", ctx.currentOptions == null ? null : ctx.currentOptions.spinnerIcon)("arrows", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrows)("arrowsAutoHide", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrowsAutoHide)("swipe", ctx.currentOptions == null ? null : ctx.currentOptions.previewSwipe)("fullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewFullscreen)("forceFullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewForceFullscreen)("closeOnClick", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnClick)("closeOnEsc", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnEsc)("keyboardNavigation", ctx.currentOptions == null ? null : ctx.currentOptions.previewKeyboardNavigation)("animation", ctx.currentOptions == null ? null : ctx.currentOptions.previewAnimation)("autoPlay", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlay)("autoPlayInterval", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayInterval)("autoPlayPauseOnHover", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayPauseOnHover)("infinityMove", ctx.currentOptions == null ? null : ctx.currentOptions.previewInfinityMove)("zoom", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoom)("zoomStep", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomStep)("zoomMax", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMax)("zoomMin", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMin)("zoomInIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomInIcon)("zoomOutIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomOutIcon)("actions", ctx.currentOptions == null ? null : ctx.currentOptions.actions)("rotate", ctx.currentOptions == null ? null : ctx.currentOptions.previewRotate)("rotateLeftIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateLeftIcon)("rotateRightIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateRightIcon)("download", ctx.currentOptions == null ? null : ctx.currentOptions.previewDownload)("downloadIcon", ctx.currentOptions == null ? null : ctx.currentOptions.downloadIcon)("bullets", ctx.currentOptions == null ? null : ctx.currentOptions.previewBullets);
    } }, directives: [i3.NgIf, NgxGalleryPreviewComponent, NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, i3.NgClass], styles: [":host{display:inline-block}:host>*{float:left}.ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}.ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}.ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}*{box-sizing:border-box}.ngx-gallery-icon{color:#fff;position:absolute;display:inline-block}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}ngx-gallery-preview{font-size:25px}ngx-gallery-preview .ngx-gallery-icon{z-index:2000}.ngx-gallery-clickable{cursor:pointer}.ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}.ngx-gallery-icons-wrapper{float:right}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery', encapsulation: ViewEncapsulation.None, providers: [NgxGalleryService], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n  <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\"\n                     [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\"\n                     [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\"\n                     [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\"\n                     [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\"\n                     [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\"\n                     [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\"\n                     [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\"\n                     [infinityMove]=\"currentOptions?.imageInfinityMove\" [lazyLoading]=\"currentOptions?.lazyLoading\"\n                     [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\"\n                     [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\"\n                     (imageClick)=\"openPreview($event)\" (activeChange)=\"selectFromImage($event)\" (animating)=\"setAnimating($event)\"></ngx-gallery-image>\n\n  <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\"\n                          [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\"\n                          [images]=\"smallImages\" [isAnimating]=\"isAnimating\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\"\n                          [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\"\n                          [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\"\n                          [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\"\n                          [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\"\n                          [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\"\n                          [arrowNextIcon]=\"currentOptions?.arrowNextIcon\"\n                          [clickable]=\"currentOptions?.image || currentOptions?.preview\"\n                          [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\"\n                          [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\"\n                          [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\"\n                          [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"\n                          (activeChange)=\"selectFromThumbnails($event)\" [ngClass]=\"currentOptions?.thumbnailClasses\"></ngx-gallery-thumbnails>\n\n  <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\"\n                       [showDescription]=\"currentOptions?.previewDescription\"\n                       [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\"\n                       [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\"\n                       [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\"\n                       [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\"\n                       [fullscreen]=\"currentOptions?.previewFullscreen\"\n                       [forceFullscreen]=\"currentOptions?.previewForceFullscreen\"\n                       [closeOnClick]=\"currentOptions?.previewCloseOnClick\"\n                       [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\"\n                       [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\"\n                       [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\"\n                       [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\"\n                       [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\"\n                       [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\"\n                       [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\"\n                       [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\"\n                       [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\"\n                       [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\"\n                       [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\"\n                       [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\"\n                       (previewClose)=\"onPreviewClose()\" (previewOpen)=\"onPreviewOpen()\"\n                       (activeChange)=\"previewSelect($event)\"\n                       [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n</div>\n", styles: [":host{display:inline-block}:host>*{float:left}.ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}.ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}.ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}*{box-sizing:border-box}.ngx-gallery-icon{color:#fff;position:absolute;display:inline-block}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}ngx-gallery-preview{font-size:25px}ngx-gallery-preview .ngx-gallery-icon{z-index:2000}.ngx-gallery-clickable{cursor:pointer}.ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}.ngx-gallery-icons-wrapper{float:right}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: NgxGalleryService }]; }, { options: [{
            type: Input
        }], images: [{
            type: Input
        }], imagesReady: [{
            type: Output
        }], change: [{
            type: Output
        }], previewOpen: [{
            type: Output
        }], previewClose: [{
            type: Output
        }], previewChange: [{
            type: Output
        }], preview: [{
            type: ViewChild,
            args: [NgxGalleryPreviewComponent]
        }], image: [{
            type: ViewChild,
            args: [NgxGalleryImageComponent]
        }], thumbnails: [{
            type: ViewChild,
            args: [NgxGalleryThumbnailsComponent]
        }], width: [{
            type: HostBinding,
            args: ['style.width']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], left: [{
            type: HostBinding,
            args: ['style.transform']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();

class CustomHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
}
CustomHammerConfig.ɵfac = /*@__PURE__*/ function () { let ɵCustomHammerConfig_BaseFactory; return function CustomHammerConfig_Factory(t) { return (ɵCustomHammerConfig_BaseFactory || (ɵCustomHammerConfig_BaseFactory = i0.ɵɵgetInheritedFactory(CustomHammerConfig)))(t || CustomHammerConfig); }; }();
CustomHammerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CustomHammerConfig, factory: CustomHammerConfig.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomHammerConfig, [{
        type: Injectable
    }], null, null); })();
class NgxGalleryModule {
}
NgxGalleryModule.ɵfac = function NgxGalleryModule_Factory(t) { return new (t || NgxGalleryModule)(); };
NgxGalleryModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxGalleryModule });
NgxGalleryModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
    ], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxGalleryComponent,
                    NgxGalleryImageComponent,
                    NgxGalleryArrowsComponent,
                    NgxGalleryThumbnailsComponent,
                    NgxGalleryPreviewComponent,
                    NgxGalleryActionComponent,
                    NgxGalleryBulletsComponent
                ],
                imports: [CommonModule],
                exports: [NgxGalleryComponent],
                providers: [
                    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxGalleryModule, { declarations: [NgxGalleryComponent,
        NgxGalleryImageComponent,
        NgxGalleryArrowsComponent,
        NgxGalleryThumbnailsComponent,
        NgxGalleryPreviewComponent,
        NgxGalleryActionComponent,
        NgxGalleryBulletsComponent], imports: [CommonModule], exports: [NgxGalleryComponent] }); })();

class NgxGalleryImage {
    constructor(obj) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.type = obj.type;
        this.label = obj.label;
    }
}

/*
 * Public API Surface of ngx-gallery
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomHammerConfig, NgxGalleryAction, NgxGalleryAnimation, NgxGalleryArrowsComponent, NgxGalleryBulletsComponent, NgxGalleryComponent, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryLayout, NgxGalleryModule, NgxGalleryOptions, NgxGalleryOrder, NgxGalleryOrderedImage, NgxGalleryPreviewComponent, NgxGalleryService, NgxGalleryThumbnailsComponent };
//# sourceMappingURL=kolkov-ngx-gallery.mjs.map
