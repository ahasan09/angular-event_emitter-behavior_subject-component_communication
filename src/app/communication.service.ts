import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class CommunicationService{
   public increaseCountEvent = new EventEmitter<boolean>();
   public decreaseCountEvent = new EventEmitter<boolean>();

   private counterSource = new BehaviorSubject<number>(0);
	public currentCounter = this.counterSource.asObservable();
	  
	updateCounter(count: number) {
		this.counterSource.next(count);
    }  
    
}