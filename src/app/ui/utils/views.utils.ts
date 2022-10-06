import { ViewportRuler } from "@angular/cdk/scrolling";
import { ElementRef, Injectable } from "@angular/core";

@Injectable()
export class UiUtilsView {

  // Generates chronologically orderable unique string one by one
  public static getVisibility(elm: ElementRef<HTMLElement>, viewPort: ViewportRuler) {
    var viewRect = viewPort.getViewportRect()
    const rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();
    if (!rect) { return 0; }

    // console.info("getVisibility: ", viewPort.getViewportRect(), rect)
    // Return 1.0 when the element is fully within the viewport
    if (rect.left > viewRect.left - 1 && rect.top > viewRect.top - 1 && rect.right < viewRect.right + 1 && rect.bottom < viewRect.bottom + 1) {
      return 1;
    }

    // Computes the intersection area otherwise
    const a = Math.round(rect.height);
    // const b = Math.max(0, Math.min(rect.right, viewRect.right) - Math.max(rect.left, viewRect.left));
    const c = Math.max(0, Math.min(rect.bottom, viewRect.bottom) - Math.max(rect.top, viewRect.top));
    // console.info("getVisibility ss : ", a, c)
    // Returns the amount of visible area 
    return Math.round(c / a * 10) / 10;

    /*    
                    // Computes the intersection area otherwise
                    const a = Math.round(rect.width * rect.height);
                    const b = Math.max(0, Math.min(rect.right, viewRect.right) - Math.max(rect.left, viewRect.left));
                    const c = Math.max(0, Math.min(rect.bottom, viewRect.bottom) - Math.max(rect.top, viewRect.top));
                    console.info("getVisibility ss : ", a, b, c)
                  
                    // Returns the amount of visible area 
                    return Math.round(b * c / a * 10) / 10;
    */
    //     var now = new Date().getTime();
    //     var duplicateTime = (now === UtilsIdGenerator.lastPushTime);
    //     UtilsIdGenerator.lastPushTime = now;

    //     var timeStampChars = new Array(8);
    //     for (var i = 7; i >= 0; i--) {
    //         timeStampChars[i] = UtilsIdGenerator.PUSH_CHARS.charAt(now % 64);
    //         // NOTE: Can't use << here because javascript will convert to int and lose the upper bits.
    //         now = Math.floor(now / 64);
    //     }
    //     if (now !== 0) throw new Error('We should have converted the entire timestamp.');

    //     var id = timeStampChars.join('');

    //     if (!duplicateTime) {
    //         for (i = 0; i < 12; i++) {
    //             UtilsIdGenerator.lastRandChars[i] = Math.floor(Math.random() * 64);
    //         }
    //     } else {
    //         // If the timestamp hasn't changed since last push, use the same random number, except incremented by 1.
    //         for (i = 11; i >= 0 && UtilsIdGenerator.lastRandChars[i] === 63; i--) {
    //             UtilsIdGenerator.lastRandChars[i] = 0;
    //         }
    //         UtilsIdGenerator.lastRandChars[i]++;
    //     }
    //     for (i = 0; i < 12; i++) {
    //         id += UtilsIdGenerator.PUSH_CHARS.charAt(UtilsIdGenerator.lastRandChars[i]);
    //     }
    //     if (id.length != 20) throw new Error('Length should be 20.');

    //     return id;

  }
}