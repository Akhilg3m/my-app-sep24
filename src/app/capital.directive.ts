import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private _elmentRef:ElementRef) { }

  @HostListener('keyup')
  change(){
    this._elmentRef.nativeElement.value = this._elmentRef.nativeElement.value.toUpperCase();
  }

}
