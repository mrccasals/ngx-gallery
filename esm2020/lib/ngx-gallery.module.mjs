import { NgModule, Injectable } from '@angular/core';
import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image/ngx-gallery-image.component';
import { NgxGalleryArrowsComponent } from './ngx-gallery-arrows/ngx-gallery-arrows.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview/ngx-gallery-preview.component';
import { NgxGalleryActionComponent } from './ngx-gallery-action/ngx-gallery-action.component';
import { NgxGalleryBulletsComponent } from './ngx-gallery-bullets/ngx-gallery-bullets.component';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export class CustomHammerConfig extends HammerGestureConfig {
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
export class NgxGalleryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2FsbGVyeS9zcmMvbGliL25neC1nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBR3JGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFEM0Q7O1FBRVcsY0FBUyxHQUFHO1lBQ25CLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUNuQixDQUFDO0tBQ1Y7O2tQQUxZLGtCQUFrQixTQUFsQixrQkFBa0I7d0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVOztBQXlCWCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7dUVBSmhCO1FBQ1QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO0tBQ2pFLFlBSlEsQ0FBRSxZQUFZLENBQUU7dUZBTWQsZ0JBQWdCO2NBaEI1QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4Qix5QkFBeUI7b0JBQ3pCLDZCQUE2QjtvQkFDN0IsMEJBQTBCO29CQUMxQix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsWUFBWSxDQUFFO2dCQUN6QixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtpQkFDakU7YUFDRjs7d0ZBQ1ksZ0JBQWdCLG1CQWR6QixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwwQkFBMEIsYUFFakIsWUFBWSxhQUNiLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neEdhbGxlcnlDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeUltYWdlQ29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlBcnJvd3NDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktYXJyb3dzL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlBY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktYWN0aW9uL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1idWxsZXRzL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWd9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyAge1xuICBvdmVycmlkZSBvdmVycmlkZXMgPSB7XG4gICAgcGluY2g6IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgIHJvdGF0ZTogeyBlbmFibGU6IGZhbHNlIH1cbiAgfSBhcyBhbnk7XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4R2FsbGVyeUNvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeUFycm93c0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5QWN0aW9uQ29tcG9uZW50LFxuICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFtOZ3hHYWxsZXJ5Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBDdXN0b21IYW1tZXJDb25maWcgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlNb2R1bGUge1xufVxuIl19