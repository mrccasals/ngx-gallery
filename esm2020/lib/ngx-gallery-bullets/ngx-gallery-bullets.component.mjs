import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0) { return { "ngx-gallery-active": a0 }; };
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.handleChange($event, i_r2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c0, i_r2 === ctx_r0.active));
} }
export class NgxGalleryBulletsComponent {
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
    } }, directives: [i1.NgForOf, i1.NgClass], styles: ["[_nghost-%COMP%]{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translate(-50%);bottom:0;padding:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;cursor:pointer;background:white}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet[_ngcontent-%COMP%]:hover, .ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%]{background:black}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nYWxsZXJ5L3NyYy9saWIvbmd4LWdhbGxlcnktYnVsbGV0cy9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS1idWxsZXRzL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQXRHLDhCQUN3RDtJQUQ0Qiw4TkFBUyxpQ0FBdUIsSUFBQztJQUM3RCxpQkFBTTs7OztJQUF6RCw0RUFBa0Q7O0FET3ZELE1BQU0sT0FBTywwQkFBMEI7SUFNckM7UUFKUyxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRVYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsVUFBVTtRQUNSLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O29HQWRVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDUnZDLDJFQUM4RDs7UUFEWCwwQ0FBaUI7O3VGRFF2RCwwQkFBMEI7Y0FOdEMsU0FBUzsyQkFDRSxxQkFBcUIsbUJBR2QsdUJBQXVCLENBQUMsTUFBTTtzQ0FHdEMsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRUksWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1idWxsZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgYWN0aXZlID0gMDtcblxuICBAT3V0cHV0KCkgYnVsbGV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0QnVsbGV0cygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5KHRoaXMuY291bnQpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYnVsbGV0Q2hhbmdlLmVtaXQoaW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktYnVsbGV0XCIgKm5nRm9yPVwibGV0IGJ1bGxldCBvZiBnZXRCdWxsZXRzKCk7IGxldCBpID0gaW5kZXg7XCIgKGNsaWNrKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQsIGkpXCJcbiAgICAgW25nQ2xhc3NdPVwieyAnbmd4LWdhbGxlcnktYWN0aXZlJzogaSA9PT0gYWN0aXZlIH1cIj48L2Rpdj5cbiJdfQ==