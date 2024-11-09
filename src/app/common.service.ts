import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public count:number = 0;
  private countSub: BehaviorSubject<number> = 
                                        new BehaviorSubject(0);

  setCount(){
    this.countSub.next(this.count++);
  }

  getCount(){
    return this.countSub;
  }

}
