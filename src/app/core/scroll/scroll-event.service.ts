import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ScrollEventService {


    actionMainEmitter: EventEmitter<Event> = new EventEmitter<Event>();

    mSubjectParentScroll: BehaviorSubject<ElementRef |undefined> =  new BehaviorSubject<ElementRef| undefined >(undefined);

    mElement?: ElementRef = undefined;
    constructor() {
    }

   
    emitActionMainEvent(scrollEvent: Event) {
        this.actionMainEmitter.emit(scrollEvent);
    }

    getActionMainEmitter(): EventEmitter<Event> {
        return this.actionMainEmitter;
    }

    public subscribeParentScroll(callback: (element?: ElementRef  ) => void): Subscription {
        return this.mSubjectParentScroll.subscribe(callback);
    }

    public dispatchUpdate(pElement?: ElementRef ) {

        this.mElement = pElement
        // let dispatchedModel = JSON.parse(JSON.stringify(this.mTopics));
        this.mSubjectParentScroll.next(this.mElement);

    }

   

}
