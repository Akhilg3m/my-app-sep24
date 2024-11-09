import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public age:number = 20;
  public name:string = "abc";
  public isIndian:boolean = true;

  public user:User = {name:'abc',phone:949494};

  public users:User[] = [
    {name:'abc',phone:949494},
    {name:'abc',phone:949494},
    {name:'abc',phone:949494}
  ]

}
