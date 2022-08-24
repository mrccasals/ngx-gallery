import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgxGalleryOrder } from '../ngx-gallery-order';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../ngx-gallery.service";
import * as i3 from "@angular/common";
import * as i4 from "../ngx-gallery-action/ngx-gallery-action.component";
import * as i5 from "../ngx-gallery-arrows/ngx-gallery-arrows.component";
const _c0 = function (a0, a1) { return { "ngx-gallery-active": a0, "ngx-gallery-clickable": a1 }; };
function NgxGalleryThumbnailsComponent_a_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const image_r2 = ctx_r8.$implicit;
    const i_r3 = ctx_r8.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", ctx_r4.getSafeUrl(image_r2));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, i_r3 === ctx_r4.selectedIndex, ctx_r4.clickable));
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c0, i_r3 === ctx_r5.selectedIndex, ctx_r5.clickable));
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
    i0.ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", i0.ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", i0.ɵɵpureFunction2(16, _c0, i_r3 === ctx_r0.selectedIndex, ctx_r0.clickable));
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
export class NgxGalleryThumbnailsComponent {
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
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) { return new (t || NgxGalleryThumbnailsComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NgxGalleryService)); };
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
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgClass, i4.NgxGalleryActionComponent, i5.NgxGalleryArrowsComponent], styles: ["@charset \"UTF-8\";[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .ngx-gallery-thumbnail-video[_ngcontent-%COMP%]:after{content:\"\\f144\";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-size:cover;height:100%}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail.ngx-gallery-active[_ngcontent-%COMP%]{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGalleryThumbnailsComponent, [{
        type: Component,
        args: [{ selector: 'ngx-gallery-thumbnails', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n  <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\"\n       [style.marginLeft]=\"thumbnailsMarginLeft\">\n    <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\"\n       *ngFor=\"let image of getImages(); let i = index;\"\n       (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\"\n       [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\"\n       [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n       [attr.aria-label]=\"labels[i]\">\n       <div *ngIf=\"getFileType(image) === 'image'\" [style.background-image]=\"getSafeUrl(image)\" class=\"ngx-gallery-thumbnail\"\n       [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n       style=\"width: 100%; height: 100%; position:absolute;\"></div>\n       <div *ngIf=\"getFileType(image) === 'video'\" class=\"ngx-gallery-thumbnail-video\">\n        <video  class=\"ngx-gallery-thumbnail\" [ngClass]=\"{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }\"\n        style=\"width: 100%; height: 100%; position:absolute; left:0; background:#000;\">\n        <source [src]=\"image\">\n          Your browser does not support the video tag.\n       </video>\n      </div>\n       <div class=\"ngx-gallery-icons-wrapper\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\"\n                            [titleText]=\"action.titleText\" (closeClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n      </div>\n      <div class=\"ngx-gallery-remaining-count-overlay\"\n           *ngIf=\"remainingCount && remainingCountValue && (i === (rows * columns) - 1)\">\n        <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n      </div>\n    </a>\n  </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (prevClick)=\"moveLeft()\" (nextClick)=\"moveRight()\"\n                    [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\"\n                    [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n", styles: ["@charset \"UTF-8\";:host{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .ngx-gallery-thumbnail-video:after{content:\"\\f144\";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .img{background-size:cover;height:100%}.ngx-gallery-thumbnails .ngx-gallery-thumbnail.ngx-gallery-active{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ElementRef }, { type: i2.NgxGalleryService }]; }, { images: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktdGh1bWJuYWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktdGh1bWJuYWlscy9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0lDTjlDLHlCQUU0RDs7Ozs7O0lBRmhCLCtEQUE0QztJQUN4RixxR0FBNkY7OztJQUU3RiwrQkFBZ0Y7SUFDL0UsaUNBQytFO0lBQy9FLDZCQUFzQjtJQUNwQiw4REFDSDtJQUFBLGlCQUFRO0lBQ1QsaUJBQU07Ozs7OztJQUxrQyxlQUE2RjtJQUE3RixxR0FBNkY7SUFFM0gsZUFBYTtJQUFiLGdEQUFhOzs7O0lBS3JCLDhDQUM0RjtJQUF6Qyw0UkFBYyxnQ0FBeUIsSUFBQztJQUFDLGlCQUFxQjs7O0lBRDlELHNDQUFvQixpQ0FBQSxtQ0FBQTs7O0lBR3pFLCtCQUNtRjtJQUNqRixnQ0FBMEM7SUFBQSxZQUF3QjtJQUFBLGlCQUFPO0lBQzNFLGlCQUFNOzs7SUFEc0MsZUFBd0I7SUFBeEIsMERBQXdCOzs7O0lBdEJ0RSw0QkFLaUM7SUFIOUIsK05BQVMsaUNBQXNCLElBQUM7SUFJaEMsa0ZBRTREO0lBQzVELGtGQU1LO0lBQ0wsOEJBQXVDO0lBQ3RDLGdIQUNpSDtJQUNuSCxpQkFBTTtJ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QixDQUFDLE1BQU07d0hBVXRDLE1BQU07a0JBQWQsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFSSxZQUFZO2tCQUFyQixNQUFNO1lBdUJxQixZQUFZO2tCQUF2QyxZQUFZO21CQUFDLFlBQVk7WUFJRSxZQUFZO2tCQUF2QyxZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsLCBTYWZlU3R5bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5U2VydmljZX0gZnJvbSAnLi4vbmd4LWdhbGxlcnkuc2VydmljZSc7XG5pbXBvcnQge05neEdhbGxlcnlBY3Rpb259IGZyb20gJy4uL25neC1nYWxsZXJ5LWFjdGlvbic7XG5pbXBvcnQge05neEdhbGxlcnlPcmRlcn0gZnJvbSAnLi4vbmd4LWdhbGxlcnktb3JkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS10aHVtYm5haWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgdGh1bWJuYWlsc0xlZnQ6IHN0cmluZztcbiAgdGh1bWJuYWlsc01hcmdpbkxlZnQ6IHN0cmluZztcbiAgbW91c2VlbnRlcjogYm9vbGVhbjtcbiAgcmVtYWluaW5nQ291bnRWYWx1ZTogbnVtYmVyO1xuXG4gIG1pblN0b3BJbmRleCA9IDA7XG5cbiAgQElucHV0KCkgaW1hZ2VzOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdO1xuICBASW5wdXQoKSBpc0FuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlua3M6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBsYWJlbHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBsaW5rVGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IG51bWJlcjtcbiAgQElucHV0KCkgcm93czogbnVtYmVyO1xuICBASW5wdXQoKSBhcnJvd3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFycm93c0F1dG9IaWRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXJnaW46IG51bWJlcjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN3aXBlOiBib29sZWFuO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgQElucHV0KCkgYXJyb3dOZXh0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBtb3ZlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBvcmRlcjogbnVtYmVyO1xuICBASW5wdXQoKSByZW1haW5pbmdDb3VudDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGF6eUxvYWRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGlvbnM6IE5neEdhbGxlcnlBY3Rpb25bXTtcblxuICBAT3V0cHV0KCkgYWN0aXZlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgaW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemF0aW9uOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBoZWxwZXJTZXJ2aWNlOiBOZ3hHYWxsZXJ5U2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydzZWxlY3RlZEluZGV4J10pIHtcbiAgICAgIHRoaXMudmFsaWRhdGVJbmRleCgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzWydzd2lwZSddKSB7XG4gICAgICB0aGlzLmhlbHBlclNlcnZpY2UubWFuYWdlU3dpcGUodGhpcy5zd2lwZSwgdGhpcy5lbGVtZW50UmVmLFxuICAgICAgICAndGh1bWJuYWlscycsICgpID0+IHRoaXMubW92ZVJpZ2h0KCksICgpID0+IHRoaXMubW92ZUxlZnQoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICB0aGlzLnJlbWFpbmluZ0NvdW50VmFsdWUgPSB0aGlzLmltYWdlcy5sZW5ndGggLSAodGhpcy5yb3dzICogdGhpcy5jb2x1bW5zKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMubW91c2VlbnRlciA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMubW91c2VlbnRlciA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc2V0RGVmYXVsdFBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB0aGlzLnZhbGlkYXRlSW5kZXgoKTtcbiAgfVxuXG4gIGdldEltYWdlcygpOiBzdHJpbmdbXSB8IFNhZmVSZXNvdXJjZVVybFtdIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2VzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sYXp5TG9hZGluZyAmJiB0aGlzLm9yZGVyICE9PSBOZ3hHYWxsZXJ5T3JkZXIuUm93KSB7XG4gICAgICBsZXQgc3RvcEluZGV4ID0gMDtcblxuICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gKHRoaXMuaW5kZXggKyB0aGlzLmNvbHVtbnMgKyB0aGlzLm1vdmVTaXplKSAqIHRoaXMucm93cztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLlBhZ2UpIHtcbiAgICAgICAgc3RvcEluZGV4ID0gdGhpcy5pbmRleCArICgodGhpcy5jb2x1bW5zICogdGhpcy5yb3dzKSAqIDIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RvcEluZGV4IDw9IHRoaXMubWluU3RvcEluZGV4KSB7XG4gICAgICAgIHN0b3BJbmRleCA9IHRoaXMubWluU3RvcEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5TdG9wSW5kZXggPSBzdG9wSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmltYWdlcy5zbGljZSgwLCBzdG9wSW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pbWFnZXM7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc0xpbmsoaW5kZXgpICYmICF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFzTGluayhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKHRoaXMubGlua3MgJiYgdGhpcy5saW5rcy5sZW5ndGggJiYgdGhpcy5saW5rc1tpbmRleF0pO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbk1vdmVSaWdodCgpKSB7XG4gICAgICB0aGlzLmluZGV4ICs9IHRoaXMubW92ZVNpemU7XG4gICAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuZ2V0TWF4SW5kZXgoKSAtIHRoaXMuY29sdW1ucztcblxuICAgICAgaWYgKHRoaXMuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gbWF4SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VGh1bWJuYWlsc1Bvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZUxlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FuTW92ZUxlZnQoKSkge1xuICAgICAgdGhpcy5pbmRleCAtPSB0aGlzLm1vdmVTaXplO1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VGh1bWJuYWlsc1Bvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY2FuTW92ZVJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluZGV4ICsgdGhpcy5jb2x1bW5zIDwgdGhpcy5nZXRNYXhJbmRleCgpO1xuICB9XG5cbiAgY2FuTW92ZUxlZnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggIT09IDA7XG4gIH1cblxuICBnZXRUaHVtYm5haWxMZWZ0KGluZGV4OiBudW1iZXIpOiBTYWZlU3R5bGUge1xuICAgIGxldCBjYWxjdWxhdGVkSW5kZXg7XG5cbiAgICBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLkNvbHVtbikge1xuICAgICAgY2FsY3VsYXRlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMucm93cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yZGVyID09PSBOZ3hHYWxsZXJ5T3JkZXIuUGFnZSkge1xuICAgICAgY2FsY3VsYXRlZEluZGV4ID0gKGluZGV4ICUgdGhpcy5jb2x1bW5zKSArIChNYXRoLmZsb29yKGluZGV4IC8gKHRoaXMucm93cyAqIHRoaXMuY29sdW1ucykpICogdGhpcy5jb2x1bW5zKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Sb3cgJiYgdGhpcy5yZW1haW5pbmdDb3VudCkge1xuICAgICAgY2FsY3VsYXRlZEluZGV4ID0gaW5kZXggJSB0aGlzLmNvbHVtbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IGluZGV4ICUgTWF0aC5jZWlsKHRoaXMuaW1hZ2VzLmxlbmd0aCAvIHRoaXMucm93cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsUG9zaXRpb24oY2FsY3VsYXRlZEluZGV4LCB0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgZ2V0VGh1bWJuYWlsVG9wKGluZGV4OiBudW1iZXIpOiBTYWZlU3R5bGUge1xuICAgIGxldCBjYWxjdWxhdGVkSW5kZXg7XG5cbiAgICBpZiAodGhpcy5vcmRlciA9PT0gTmd4R2FsbGVyeU9yZGVyLkNvbHVtbikge1xuICAgICAgY2FsY3VsYXRlZEluZGV4ID0gaW5kZXggJSB0aGlzLnJvd3M7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yZGVyID09PSBOZ3hHYWxsZXJ5T3JkZXIuUGFnZSkge1xuICAgICAgY2FsY3VsYXRlZEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuY29sdW1ucykgLSAoTWF0aC5mbG9vcihpbmRleCAvICh0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMpKSAqIHRoaXMucm93cyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yZGVyID09PSBOZ3hHYWxsZXJ5T3JkZXIuUm93ICYmIHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgIGNhbGN1bGF0ZWRJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmNvbHVtbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxjdWxhdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gTWF0aC5jZWlsKHRoaXMuaW1hZ2VzLmxlbmd0aCAvIHRoaXMucm93cykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFRodW1ibmFpbFBvc2l0aW9uKGNhbGN1bGF0ZWRJbmRleCwgdGhpcy5yb3dzKTtcbiAgfVxuXG4gIGdldFRodW1ibmFpbFdpZHRoKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGh1bWJuYWlsRGltZW5zaW9uKHRoaXMuY29sdW1ucyk7XG4gIH1cblxuICBnZXRUaHVtYm5haWxIZWlnaHQoKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaHVtYm5haWxEaW1lbnNpb24odGhpcy5yb3dzKTtcbiAgfVxuXG4gIHNldFRodW1ibmFpbHNQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnRodW1ibmFpbHNMZWZ0ID0gLSgoMTAwIC8gdGhpcy5jb2x1bW5zKSAqIHRoaXMuaW5kZXgpICsgJyUnO1xuXG4gICAgdGhpcy50aHVtYm5haWxzTWFyZ2luTGVmdCA9IC0oKHRoaXMubWFyZ2luIC0gKCgodGhpcy5jb2x1bW5zIC0gMSlcbiAgICAgICogdGhpcy5tYXJnaW4pIC8gdGhpcy5jb2x1bW5zKSkgKiB0aGlzLmluZGV4KSArICdweCc7XG4gIH1cblxuICBzZXREZWZhdWx0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy50aHVtYm5haWxzTGVmdCA9ICcwcHgnO1xuICAgIHRoaXMudGh1bWJuYWlsc01hcmdpbkxlZnQgPSAnMHB4JztcbiAgfVxuXG4gIGNhblNob3dBcnJvd3MoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucmVtYWluaW5nQ291bnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzICYmIHRoaXMuaW1hZ2VzICYmIHRoaXMuaW1hZ2VzLmxlbmd0aCA+IHRoaXMuZ2V0VmlzaWJsZUNvdW50KClcbiAgICAgICAgJiYgKCF0aGlzLmFycm93c0F1dG9IaWRlIHx8IHRoaXMubW91c2VlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVJbmRleCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIGxldCBuZXdJbmRleDtcblxuICAgICAgaWYgKHRoaXMub3JkZXIgPT09IE5neEdhbGxlcnlPcmRlci5Db2x1bW4pIHtcbiAgICAgICAgbmV3SW5kZXggPSBNYXRoLmZsb29yKHRoaXMuc2VsZWN0ZWRJbmRleCAvIHRoaXMucm93cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleCAlIE1hdGguY2VpbCh0aGlzLmltYWdlcy5sZW5ndGggLyB0aGlzLnJvd3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZW1haW5pbmdDb3VudCkge1xuICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdJbmRleCA8IHRoaXMuaW5kZXggfHwgbmV3SW5kZXggPj0gdGhpcy5pbmRleCArIHRoaXMuY29sdW1ucykge1xuICAgICAgICBjb25zdCBtYXhJbmRleCA9IHRoaXMuZ2V0TWF4SW5kZXgoKSAtIHRoaXMuY29sdW1ucztcbiAgICAgICAgdGhpcy5pbmRleCA9IG5ld0luZGV4ID4gbWF4SW5kZXggPyBtYXhJbmRleCA6IG5ld0luZGV4O1xuXG4gICAgICAgIHRoaXMuc2V0VGh1bWJuYWlsc1Bvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2FmZVVybChpbWFnZTogc3RyaW5nIHwgU2FmZVJlc291cmNlVXJsKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHRoaXMuaGVscGVyU2VydmljZS5nZXRCYWNrZ3JvdW5kVXJsKGltYWdlLnRvU3RyaW5nKCkpKTtcbiAgfVxuXG4gIGdldEZpbGVUeXBlKGZpbGVTb3VyY2U6IHN0cmluZyB8IFNhZmVSZXNvdXJjZVVybCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGVscGVyU2VydmljZS5nZXRGaWxlVHlwZShmaWxlU291cmNlLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaHVtYm5haWxQb3NpdGlvbihpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTYWZlU3R5bGUoJ2NhbGMoJyArICgoMTAwIC8gY291bnQpICogaW5kZXgpICsgJyUgKyAnXG4gICAgICArICgodGhpcy5tYXJnaW4gLSAoKChjb3VudCAtIDEpICogdGhpcy5tYXJnaW4pIC8gY291bnQpKSAqIGluZGV4KSArICdweCknKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGh1bWJuYWlsRGltZW5zaW9uKGNvdW50OiBudW1iZXIpOiBTYWZlU3R5bGUge1xuICAgIGlmICh0aGlzLm1hcmdpbiAhPT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoMTAwIC8gY291bnQpICsgJyUgLSAnXG4gICAgICAgICsgKCgoY291bnQgLSAxKSAqIHRoaXMubWFyZ2luKSAvIGNvdW50KSArICdweCknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U2FmZVN0eWxlKCdjYWxjKCcgKyAoMTAwIC8gY291bnQpICsgJyUgKyAxcHgpJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXhJbmRleCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm9yZGVyID09PSBOZ3hHYWxsZXJ5T3JkZXIuUGFnZSkge1xuICAgICAgbGV0IG1heEluZGV4ID0gKE1hdGguZmxvb3IodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5nZXRWaXNpYmxlQ291bnQoKSkgKiB0aGlzLmNvbHVtbnMpO1xuXG4gICAgICBpZiAodGhpcy5pbWFnZXMubGVuZ3RoICUgdGhpcy5nZXRWaXNpYmxlQ291bnQoKSA+IHRoaXMuY29sdW1ucykge1xuICAgICAgICBtYXhJbmRleCArPSB0aGlzLmNvbHVtbnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhJbmRleCArPSB0aGlzLmltYWdlcy5sZW5ndGggJSB0aGlzLmdldFZpc2libGVDb3VudCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5pbWFnZXMubGVuZ3RoIC8gdGhpcy5yb3dzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFZpc2libGVDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnMgKiB0aGlzLnJvd3M7XG4gIH1cblxuICBwcml2YXRlIGdldFNhZmVTdHlsZSh2YWx1ZTogc3RyaW5nKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6YXRpb24uYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5neC1nYWxsZXJ5LXRodW1ibmFpbHMtd3JhcHBlciBuZ3gtZ2FsbGVyeS10aHVtYm5haWwtc2l6ZS17e3NpemV9fVwiPlxuICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktdGh1bWJuYWlsc1wiIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVgoJyArIHRodW1ibmFpbHNMZWZ0ICsgJyknXCJcbiAgICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJ0aHVtYm5haWxzTWFyZ2luTGVmdFwiPlxuICAgIDxhIFtocmVmXT1cImhhc0xpbmsoaSkgPyBsaW5rc1tpXSA6ICcjJ1wiIFt0YXJnZXRdPVwibGlua1RhcmdldFwiIGNsYXNzPVwibmd4LWdhbGxlcnktdGh1bWJuYWlsXCJcbiAgICAgICAqbmdGb3I9XCJsZXQgaW1hZ2Ugb2YgZ2V0SW1hZ2VzKCk7IGxldCBpID0gaW5kZXg7XCJcbiAgICAgICAoY2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50LCBpKVwiIFtzdHlsZS53aWR0aF09XCJnZXRUaHVtYm5haWxXaWR0aCgpXCIgW3N0eWxlLmhlaWdodF09XCJnZXRUaHVtYm5haWxIZWlnaHQoKVwiXG4gICAgICAgW3N0eWxlLmxlZnRdPVwiZ2V0VGh1bWJuYWlsTGVmdChpKVwiIFtzdHlsZS50b3BdPVwiZ2V0VGh1bWJuYWlsVG9wKGkpXCJcbiAgICAgICBbbmdDbGFzc109XCJ7ICduZ3gtZ2FsbGVyeS1hY3RpdmUnOiBpID09PSBzZWxlY3RlZEluZGV4LCAnbmd4LWdhbGxlcnktY2xpY2thYmxlJzogY2xpY2thYmxlIH1cIlxuICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxzW2ldXCI+XG4gICAgICAgPGRpdiAqbmdJZj1cImdldEZpbGVUeXBlKGltYWdlKSA9PT0gJ2ltYWdlJ1wiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImdldFNhZmVVcmwoaW1hZ2UpXCIgY2xhc3M9XCJuZ3gtZ2FsbGVyeS10aHVtYm5haWxcIlxuICAgICAgIFtuZ0NsYXNzXT1cInsgJ25neC1nYWxsZXJ5LWFjdGl2ZSc6IGkgPT09IHNlbGVjdGVkSW5kZXgsICduZ3gtZ2FsbGVyeS1jbGlja2FibGUnOiBjbGlja2FibGUgfVwiXG4gICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBwb3NpdGlvbjphYnNvbHV0ZTtcIj48L2Rpdj5cbiAgICAgICA8ZGl2ICpuZ0lmPVwiZ2V0RmlsZVR5cGUoaW1hZ2UpID09PSAndmlkZW8nXCIgY2xhc3M9XCJuZ3gtZ2FsbGVyeS10aHVtYm5haWwtdmlkZW9cIj5cbiAgICAgICAgPHZpZGVvICBjbGFzcz1cIm5neC1nYWxsZXJ5LXRodW1ibmFpbFwiIFtuZ0NsYXNzXT1cInsgJ25neC1nYWxsZXJ5LWFjdGl2ZSc6IGkgPT09IHNlbGVjdGVkSW5kZXgsICduZ3gtZ2FsbGVyeS1jbGlja2FibGUnOiBjbGlja2FibGUgfVwiXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgYmFja2dyb3VuZDojMDAwO1wiPlxuICAgICAgICA8c291cmNlIFtzcmNdPVwiaW1hZ2VcIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgIDwvdmlkZW8+XG4gICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktaWNvbnMtd3JhcHBlclwiPlxuICAgICAgICA8bmd4LWdhbGxlcnktYWN0aW9uICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtpY29uXT1cImFjdGlvbi5pY29uXCIgW2Rpc2FibGVkXT1cImFjdGlvbi5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlVGV4dF09XCJhY3Rpb24udGl0bGVUZXh0XCIgKGNsb3NlQ2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soJGV2ZW50LCBpKVwiPjwvbmd4LWdhbGxlcnktYWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktcmVtYWluaW5nLWNvdW50LW92ZXJsYXlcIlxuICAgICAgICAgICAqbmdJZj1cInJlbWFpbmluZ0NvdW50ICYmIHJlbWFpbmluZ0NvdW50VmFsdWUgJiYgKGkgPT09IChyb3dzICogY29sdW1ucykgLSAxKVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5neC1nYWxsZXJ5LXJlbWFpbmluZy1jb3VudFwiPit7e3JlbWFpbmluZ0NvdW50VmFsdWV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgPC9kaXY+XG48L2Rpdj5cbjxuZ3gtZ2FsbGVyeS1hcnJvd3MgKm5nSWY9XCJjYW5TaG93QXJyb3dzKClcIiAocHJldkNsaWNrKT1cIm1vdmVMZWZ0KClcIiAobmV4dENsaWNrKT1cIm1vdmVSaWdodCgpXCJcbiAgICAgICAgICAgICAgICAgICAgW3ByZXZEaXNhYmxlZF09XCIhY2FuTW92ZUxlZnQoKVwiIFtuZXh0RGlzYWJsZWRdPVwiIWNhbk1vdmVSaWdodCgpXCIgW2Fycm93UHJldkljb25dPVwiYXJyb3dQcmV2SWNvblwiXG4gICAgICAgICAgICAgICAgICAgIFthcnJvd05leHRJY29uXT1cImFycm93TmV4dEljb25cIj48L25neC1nYWxsZXJ5LWFycm93cz5cbiJdfQ==