import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxGalleryAnimation } from '../ngx-gallery-animation';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../ngx-gallery.service";
import * as i3 from "@angular/common";
import * as i4 from "../ngx-gallery-action/ngx-gallery-action.component";
import * as i5 from "../ngx-gallery-bullets/ngx-gallery-bullets.component";
import * as i6 from "../ngx-gallery-arrows/ngx-gallery-arrows.component";
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
const _c0 = function (a0) { return { "ngx-gallery-clickable": a0 }; };
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r5.clickable))("@animation", ctx_r5.action);
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, ctx_r6.clickable))("@animation", ctx_r6.action);
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
export class NgxGalleryImageComponent {
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
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) { return new (t || NgxGalleryImageComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NgxGalleryService)); };
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
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgClass, i4.NgxGalleryActionComponent, i5.NgxGalleryBulletsComponent, i6.NgxGalleryArrowsComponent], styles: ["[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:1;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1) rotate(0);left:0;opacity:1}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1);left:0;opacity:1}.ngx-gallery-image-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"], data: { animation: [
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
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.NgxGalleryService }]; }, { images: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2FsbGVyeS9zcmMvbGliL25neC1nYWxsZXJ5LWltYWdlL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1pbWFnZS9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFDLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7SUNQdkYsNkNBRXVFO0lBQW5ELGdUQUFjLHlDQUFtQyxJQUFDO0lBQUMsaUJBQXFCOzs7SUFGekMscUNBQW9CLGdDQUFBLGtDQUFBOzs7SUFJekUsOEJBQytFO0lBQW5DLG1JQUFTLHdCQUF3QixJQUFDO0lBQUMsaUJBQU07Ozs7SUFBakYsa0ZBQXVDOzs7OztJQWI3Qyw4QkFNd0M7SUFIbkMsd09BQVMsMkNBQWdDLElBQUMsNE1BRXRCLHVCQUFlLElBRk8sME1BR3ZCLHNCQUFjLElBSFM7SUFJN0MsOEJBQXVDO0lBQ3JDLDRIQUU0RjtJQUM5RixpQkFBTTtJQUNOLDhGQUNxRjtJQUN2RixpQkFBTTs7OztJQVpELG1FQUFnRDtJQURoRCxzRUFBaUQsNkJBQUE7SUFPWCxlQUFVO0lBQVYsd0NBQVU7SUFJZCxlQUFrRDtJQUFsRCxvRkFBa0Q7Ozs7SUFnQnZGLDZDQUV1RTtJQUFu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a0JBQW5CLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQWtDcUIsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZO1lBVUUsWUFBWTtrQkFBdkMsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05neEdhbGxlcnlTZXJ2aWNlfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS5zZXJ2aWNlJztcbmltcG9ydCB7Tmd4R2FsbGVyeU9yZGVyZWRJbWFnZX0gZnJvbSAnLi4vbmd4LWdhbGxlcnktb3JkZXJlZC1pbWFnZSc7XG5pbXBvcnQge05neEdhbGxlcnlBY3Rpb259IGZyb20gJy4uL25neC1nYWxsZXJ5LWFjdGlvbic7XG5pbXBvcnQge05neEdhbGxlcnlBbmltYXRpb259IGZyb20gJy4uL25neC1nYWxsZXJ5LWFuaW1hdGlvbic7XG5pbXBvcnQge2FuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG50eXBlIE9yaWVudGF0aW9uID0gKCdzbGlkZUxlZnQnIHwgJ3NsaWRlUmlnaHQnIHwgJ2ZhZGUnIHwgJ3JvdGF0ZUxlZnQnIHwgJ3JvdGF0ZVJpZ2h0JyB8ICd6b29tJyB8ICdub25lJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhbmltYXRpb24nLCBbXG4gICAgICAvLyAuLi5cbiAgICAgIHN0YXRlKCdzbGlkZVJpZ2h0Jywgc3R5bGUoe30pKSxcbiAgICAgIHN0YXRlKCdzbGlkZUxlZnQnLCBzdHlsZSh7fSkpLFxuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7fSkpLFxuICAgICAgc3RhdGUoJ3JvdGF0ZUxlZnQnLCBzdHlsZSh7fSkpLFxuICAgICAgc3RhdGUoJ3JvdGF0ZVJpZ2h0Jywgc3R5bGUoe30pKSxcbiAgICAgIHN0YXRlKCd6b29tJywgc3R5bGUoe30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlUmlnaHQgPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gc2xpZGVSaWdodCcsIFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknfSksXG4gICAgICAgIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3NsaWRlTGVmdCA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCc1MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJ30pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IHNsaWRlTGVmdCcsIFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJ30pLFxuICAgICAgICBhbmltYXRlKCc1MDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJ30pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdmYWRlID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe29wYWNpdHk6ICcwJ30pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGZhZGUnLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAnMCd9KSxcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7b3BhY2l0eTogJzEnfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZUxlZnQgPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSwgMSkgcm90YXRlKC05MGRlZyknLCBvcGFjaXR5OiAnMCd9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiByb3RhdGVMZWZ0JywgW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSwgMSkgcm90YXRlKC05MGRlZyknLCBvcGFjaXR5OiAnMCd9KSxcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpJywgb3BhY2l0eTogJzEnfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3JvdGF0ZVJpZ2h0ID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEsIDEpIHJvdGF0ZSg5MGRlZyknLCBvcGFjaXR5OiAnMCd9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiByb3RhdGVSaWdodCcsIFtcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEsIDEpIHJvdGF0ZSg5MGRlZyknLCBvcGFjaXR5OiAnMCd9KSxcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpJywgb3BhY2l0eTogJzEnfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3pvb20gPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMi41LDIuNSknLCBvcGFjaXR5OiAnMCd9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiB6b29tJywgW1xuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMi41LDIuNSknLCBvcGFjaXR5OiAnMCd9KSxcbiAgICAgICAgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7dHJhbnNmb3JtOiAnc2NhbGUoMSwgMSknLCBvcGFjaXR5OiAnMSd9KSlcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaW1hZ2VzOiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlW107XG4gIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiwgbm8tdW5kZXJzY29yZS1kYW5nbGUsIGlkLWJsYWNrbGlzdCwgaWQtbWF0Y2hcbiAgX3NlbGVjdGVkSW5kZXg7XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPiB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlNsaWRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdzbGlkZVJpZ2h0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uRmFkZSkge1xuICAgICAgICBhY3Rpb24gPSAnZmFkZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlJvdGF0ZSkge1xuICAgICAgICBhY3Rpb24gPSAncm90YXRlUmlnaHQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5ab29tKSB7XG4gICAgICAgIGFjdGlvbiA9ICd6b29tJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aW9uKGFjdGlvbik7XG4gICAgfSBlbHNlIGlmIChpbmRleCA8IHRoaXMuX3NlbGVjdGVkSW5kZXgpIHtcbiAgICAgIGxldCBhY3Rpb247XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uU2xpZGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ3NsaWRlTGVmdCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLkZhZGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ2ZhZGUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5Sb3RhdGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ3JvdGF0ZUxlZnQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5ab29tKSB7XG4gICAgICAgIGFjdGlvbiA9ICd6b29tJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aW9uKGFjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgQElucHV0KCkgYXJyb3dzOiBib29sZWFuO1xuICBASW5wdXQoKSBhcnJvd3NBdXRvSGlkZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgQElucHV0KCkgYXJyb3dOZXh0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdXRvUGxheTogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b1BsYXlJbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoKSBhdXRvUGxheVBhdXNlT25Ib3ZlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgaW5maW5pdHlNb3ZlOiBib29sZWFuO1xuICBASW5wdXQoKSBsYXp5TG9hZGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aW9uczogTmd4R2FsbGVyeUFjdGlvbltdO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbnM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJ1bGxldHM6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGltYWdlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FuQ2hhbmdlSW1hZ2UgPSB0cnVlO1xuICBwdWJsaWMgYWN0aW9uOiBPcmllbnRhdGlvbjtcblxuICBpc0FuaW1hdGluZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgdGltZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6YXRpb246IERvbVNhbml0aXplciwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBoZWxwZXJTZXJ2aWNlOiBOZ3hHYWxsZXJ5U2VydmljZSkge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgPSBjaGFuZ2VEZXRlY3RvclJlZjtcbiAgICB0aGlzLmFjdGlvbiA9ICdub25lJztcbiAgfVxuXG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIHB1YmxpYyBkaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIHB1YmxpYyBjb2xvciA9ICdsaW1lJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5hcnJvd3MgJiYgdGhpcy5hcnJvd3NBdXRvSGlkZSkge1xuICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLCAnaW1hZ2UnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIG9uTW91c2VFbnRlcigpIHtcbiAgICBpZiAodGhpcy5hcnJvd3NBdXRvSGlkZSAmJiAhdGhpcy5hcnJvd3MpIHtcbiAgICAgIHRoaXMuYXJyb3dzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5UGF1c2VPbkhvdmVyKSB7XG4gICAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgdGhpcy5hcnJvd3MpIHtcbiAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b1BsYXkgJiYgdGhpcy5hdXRvUGxheVBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5zdGFydEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmFjdGlvbiA9ICdub25lJztcbiAgfVxuXG4gIGdldEltYWdlcygpOiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlW10ge1xuICAgIGlmICghdGhpcy5pbWFnZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXp5TG9hZGluZykge1xuICAgICAgY29uc3QgaW5kZXhlcyA9IFt0aGlzLl9zZWxlY3RlZEluZGV4XTtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggLSAxO1xuXG4gICAgICBpZiAocHJldkluZGV4ID09PSAtMSAmJiB0aGlzLmluZmluaXR5TW92ZSkge1xuICAgICAgICBpbmRleGVzLnB1c2godGhpcy5pbWFnZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZJbmRleCA+PSAwKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChwcmV2SW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4ICsgMTtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gdGhpcy5pbWFnZXMubGVuZ3RoICYmIHRoaXMuaW5maW5pdHlNb3ZlKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChuZXh0SW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5pbWFnZXMuZmlsdGVyKChpbWcsIGkpID0+IGluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbWFnZXM7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRBdXRvUGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BBdXRvUGxheSgpO1xuXG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zaG93TmV4dCgpKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5zaG93TmV4dCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuYXV0b1BsYXlJbnRlcnZhbCk7XG4gIH1cblxuICBzdG9wQXV0b1BsYXkoKSB7XG4gICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XG4gICAgICB0aGlzLmltYWdlQ2xpY2suZW1pdChpbmRleCk7XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9zZWxlY3RlZEluZGV4KSB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlNsaWRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdzbGlkZVJpZ2h0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uRmFkZSkge1xuICAgICAgICBhY3Rpb24gPSAnZmFkZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlJvdGF0ZSkge1xuICAgICAgICBhY3Rpb24gPSAncm90YXRlUmlnaHQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5ab29tKSB7XG4gICAgICAgIGFjdGlvbiA9ICd6b29tJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aW9uKGFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhY3Rpb247XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uU2xpZGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ3NsaWRlTGVmdCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLkZhZGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ2ZhZGUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5Sb3RhdGUpIHtcbiAgICAgICAgYWN0aW9uID0gJ3JvdGF0ZUxlZnQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5ab29tKSB7XG4gICAgICAgIGFjdGlvbiA9ICd6b29tJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aW9uKGFjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuYWN0aXZlQ2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG4gIH1cblxuICBzZXRBY3Rpb24oYWN0aW9uOiBPcmllbnRhdGlvbikge1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2hvd05leHQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FuU2hvd05leHQoKSAmJiB0aGlzLmNhbkNoYW5nZUltYWdlKSB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlNsaWRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdzbGlkZVJpZ2h0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uRmFkZSkge1xuICAgICAgICBhY3Rpb24gPSAnZmFkZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlJvdGF0ZSkge1xuICAgICAgICBhY3Rpb24gPSAncm90YXRlUmlnaHQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5ab29tKSB7XG4gICAgICAgIGFjdGlvbiA9ICd6b29tJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aW9uKGFjdGlvbik7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4Kys7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2hvd1ByZXYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FuU2hvd1ByZXYoKSAmJiB0aGlzLmNhbkNoYW5nZUltYWdlKSB7XG4gICAgICBsZXQgYWN0aW9uO1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlNsaWRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdzbGlkZUxlZnQnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5GYWRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdmYWRlJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uUm90YXRlKSB7XG4gICAgICAgIGFjdGlvbiA9ICdyb3RhdGVMZWZ0JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hbmltYXRpb24gPT09IE5neEdhbGxlcnlBbmltYXRpb24uWm9vbSkge1xuICAgICAgICBhY3Rpb24gPSAnem9vbSc7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFjdGlvbihhY3Rpb24pO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleC0tO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLmltYWdlcy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5zZXRDaGFuZ2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2hhbmdlVGltZW91dCgpIHtcbiAgICB0aGlzLmNhbkNoYW5nZUltYWdlID0gZmFsc2U7XG4gICAgbGV0IHRpbWVvdXQgPSAxMDAwO1xuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uID09PSBOZ3hHYWxsZXJ5QW5pbWF0aW9uLlNsaWRlXG4gICAgICB8fCB0aGlzLmFuaW1hdGlvbiA9PT0gTmd4R2FsbGVyeUFuaW1hdGlvbi5GYWRlKSB7XG4gICAgICB0aW1lb3V0ID0gNTAwO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYW5DaGFuZ2VJbWFnZSA9IHRydWU7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmluZmluaXR5TW92ZSB8fCB0aGlzLl9zZWxlY3RlZEluZGV4IDwgdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgcmV0dXJuIHRoaXMuaW5maW5pdHlNb3ZlIHx8IHRoaXMuX3NlbGVjdGVkSW5kZXggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2FmZVVybChpbWFnZTogc3RyaW5nIHwgU2FmZVJlc291cmNlVXJsKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuaGVscGVyU2VydmljZS5nZXRCYWNrZ3JvdW5kVXJsKGltYWdlLnRvU3RyaW5nKCkpKTtcbiAgfVxuXG4gIGdldEZpbGVUeXBlKGZpbGVTb3VyY2U6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmhlbHBlclNlcnZpY2UuZ2V0RmlsZVR5cGUoZmlsZVNvdXJjZSk7XG4gIH1cblxuICBvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYW5pbWF0aW5nLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW5nLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaW1hZ2Utd3JhcHBlciBuZ3gtZ2FsbGVyeS1hbmltYXRpb24te3thbmltYXRpb259fSBuZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLXt7c2l6ZX19XCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGltYWdlIG9mIGdldEltYWdlcygpOyBsZXQgaSA9IGluZGV4O1wiPlxuXG4gICAgPGRpdiAqbmdJZj1cImltYWdlLnR5cGUgPT09ICdpbWFnZScgJiYgaW1hZ2UuaW5kZXggPT09IF9zZWxlY3RlZEluZGV4XCIgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZVwiXG4gICAgICAgICBbbmdDbGFzc109XCJ7J25neC1nYWxsZXJ5LWNsaWNrYWJsZSc6IGNsaWNrYWJsZSB9XCJcbiAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImdldFNhZmVVcmwoaW1hZ2Uuc3JjKVwiXG4gICAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LCBpbWFnZS5pbmRleClcIlxuICAgICAgICAgW0BhbmltYXRpb25dPVwiYWN0aW9uXCJcbiAgICAgICAgIChAYW5pbWF0aW9uLnN0YXJ0KT1cIm9uU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAoQGFuaW1hdGlvbi5kb25lKT1cIm9uRG9uZSgkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbnMtd3JhcHBlclwiPlxuICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtpY29uXT1cImFjdGlvbi5pY29uXCIgW2Rpc2FibGVkXT1cImFjdGlvbi5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlVGV4dF09XCJhY3Rpb24udGl0bGVUZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VDbGljayk9XCJhY3Rpb24ub25DbGljaygkZXZlbnQsIGltYWdlLmluZGV4KVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaW1hZ2UtdGV4dFwiICpuZ0lmPVwic2hvd0Rlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uc1tpbWFnZS5pbmRleF1cIlxuICAgICAgICAgIFtpbm5lckhUTUxdPVwiZGVzY3JpcHRpb25zW2ltYWdlLmluZGV4XVwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpbWFnZS50eXBlID09PSAndmlkZW8nICYmIGltYWdlLmluZGV4ID09PSBfc2VsZWN0ZWRJbmRleFwiIGNsYXNzPVwibmd4LWdhbGxlcnktaW1hZ2VcIlxuICAgICAgICAgW25nQ2xhc3NdPVwieyduZ3gtZ2FsbGVyeS1jbGlja2FibGUnOiBjbGlja2FibGUgfVwiXG4gICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJnZXRTYWZlVXJsKGltYWdlLnNyYylcIlxuICAgICAgICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudCwgaW1hZ2UuaW5kZXgpXCJcbiAgICAgICAgIFtAYW5pbWF0aW9uXT1cImFjdGlvblwiXG4gICAgICAgICAoQGFuaW1hdGlvbi5zdGFydCk9XCJvblN0YXJ0KCRldmVudClcIlxuICAgICAgICAgKEBhbmltYXRpb24uZG9uZSk9XCJvbkRvbmUoJGV2ZW50KVwiPlxuICAgICAgPHZpZGVvIGNvbnRyb2xzIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IGJhY2tncm91bmQ6ICMwMDA7XCI+XG4gICAgICAgIDxzb3VyY2UgW3NyY109XCJpbWFnZS5zcmNcIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgPC92aWRlbz5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pY29ucy13cmFwcGVyXCI+XG4gICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtpY29uXT1cImFjdGlvbi5pY29uXCIgW2Rpc2FibGVkXT1cImFjdGlvbi5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZVRleHRdPVwiYWN0aW9uLnRpdGxlVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbG9zZUNsaWNrKT1cImFjdGlvbi5vbkNsaWNrKCRldmVudCwgaW1hZ2UuaW5kZXgpXCI+PC9uZ3gtZ2FsbGVyeS1hY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZS10ZXh0XCIgKm5nSWY9XCJzaG93RGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb25zW2ltYWdlLmluZGV4XVwiXG4gICAgICAgICAgW2lubmVySFRNTF09XCJkZXNjcmlwdGlvbnNbaW1hZ2UuaW5kZXhdXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5neC1nYWxsZXJ5LWJ1bGxldHMgKm5nSWY9XCJidWxsZXRzXCIgW2NvdW50XT1cImltYWdlcy5sZW5ndGhcIiBbYWN0aXZlXT1cIl9zZWxlY3RlZEluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGJ1bGxldENoYW5nZSk9XCJzaG93KCRldmVudClcIj48L25neC1nYWxsZXJ5LWJ1bGxldHM+XG4gIDxuZ3gtZ2FsbGVyeS1hcnJvd3MgY2xhc3M9XCJuZ3gtZ2FsbGVyeS1pbWFnZS1zaXplLXt7c2l6ZX19XCIgKm5nSWY9XCJhcnJvd3NcIiAocHJldkNsaWNrKT1cInNob3dQcmV2KClcIlxuICAgICAgICAgICAgICAgICAgICAgIChuZXh0Q2xpY2spPVwic2hvd05leHQoKVwiIFtwcmV2RGlzYWJsZWRdPVwiIWNhblNob3dQcmV2KClcIiBbbmV4dERpc2FibGVkXT1cIiFjYW5TaG93TmV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXJyb3dQcmV2SWNvbl09XCJhcnJvd1ByZXZJY29uXCIgW2Fycm93TmV4dEljb25dPVwiYXJyb3dOZXh0SWNvblwiPjwvbmd4LWdhbGxlcnktYXJyb3dzPlxuPC9kaXY+XG4iXX0=