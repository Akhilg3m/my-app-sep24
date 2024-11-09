import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {

  constructor(private _commonService:CommonService){
    _commonService.getCount().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }

  public cartCount:number = 0;

}
