import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxGalleryService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2dhbGxlcnkvc3JjL2xpYi9uZ3gtZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBS2hFLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUYvQixrQkFBYSxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztJQUd2RixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWUsRUFBRSxPQUFtQixFQUFFLEVBQVUsRUFBRSxXQUF1QixFQUFFLFdBQXVCO1FBRTVHLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQyxzRUFBc0U7UUFDdEUsSUFBSTtZQUNGLElBQUksTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDL0UsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7U0FDWDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsR0FBVztRQUNyQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDZixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztpQkFDNUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLE9BQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFFRCxXQUFXLENBQUUsVUFBa0I7UUFDN0IsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRSxJQUFJLGFBQWEsS0FBSyxLQUFLLElBQUksYUFBYSxLQUFLLEtBQUs7ZUFDakQsYUFBYSxLQUFLLEtBQUssSUFBSSxhQUFhLEtBQUssS0FBSztlQUNsRCxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQzVCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVTLGdCQUFnQixDQUFDLEVBQVU7UUFDakMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsRUFBVTtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOztrRkF0RFUsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNO3VGQUVQLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzd2lwZUhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoKCkgPT4gdm9pZClbXT4gPSBuZXcgTWFwPHN0cmluZywgKCgpID0+IHZvaWQpW10+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBtYW5hZ2VTd2lwZShzdGF0dXM6IGJvb2xlYW4sIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGlkOiBzdHJpbmcsIG5leHRIYW5kbGVyOiAoKSA9PiB2b2lkLCBwcmV2SGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xuXG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmdldFN3aXBlSGFuZGxlcnMoaWQpO1xuXG4gICAgLy8gc3dpcGVsZWZ0IGFuZCBzd2lwZXJpZ2h0IGFyZSBhdmFpbGFibGUgb25seSBpZiBoYW1tZXJqcyBpcyBpbmNsdWRlZFxuICAgIHRyeSB7XG4gICAgICBpZiAoc3RhdHVzICYmICFoYW5kbGVycykge1xuICAgICAgICB0aGlzLnN3aXBlSGFuZGxlcnMuc2V0KGlkLCBbXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc3dpcGVsZWZ0JywgKCkgPT4gbmV4dEhhbmRsZXIoKSksXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc3dpcGVyaWdodCcsICgpID0+IHByZXZIYW5kbGVyKCkpXG4gICAgICAgIF0pO1xuICAgICAgfSBlbHNlIGlmICghc3RhdHVzICYmIGhhbmRsZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzLm1hcCgoaGFuZGxlcikgPT4gaGFuZGxlcigpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVTd2lwZUhhbmRsZXJzKGlkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh1cmwucmVwbGFjZSkge1xuICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJTIwJylcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFwnJywgJ2cnKSwgJyUyNycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGdldEJhY2tncm91bmRVcmwoaW1hZ2U6IHN0cmluZykge1xuICAgIHJldHVybiAndXJsKFxcJycgKyB0aGlzLnZhbGlkYXRlVXJsKGltYWdlKSArICdcXCcpJztcbiAgfVxuXG4gIGdldEZpbGVUeXBlIChmaWxlU291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpbGVFeHRlbnNpb24gPSBmaWxlU291cmNlLnNwbGl0KCcuJykucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZmlsZUV4dGVuc2lvbiA9PT0gJ2F2aScgfHwgZmlsZUV4dGVuc2lvbiA9PT0gJ2ZsdidcbiAgICAgIHx8IGZpbGVFeHRlbnNpb24gPT09ICd3bXYnIHx8IGZpbGVFeHRlbnNpb24gPT09ICdtb3YnXG4gICAgICB8fCBmaWxlRXh0ZW5zaW9uID09PSAnbXA0Jykge1xuICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgfVxuICAgIHJldHVybiAnaW1hZ2UnO1xufVxuXG4gIHByaXZhdGUgZ2V0U3dpcGVIYW5kbGVycyhpZDogc3RyaW5nKTogKCgpID0+IHZvaWQpW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnN3aXBlSGFuZGxlcnMuZ2V0KGlkKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlU3dpcGVIYW5kbGVycyhpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zd2lwZUhhbmRsZXJzLmRlbGV0ZShpZCk7XG4gIH1cbn1cbiJdfQ==