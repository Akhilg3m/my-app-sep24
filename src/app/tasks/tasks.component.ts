import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  name:string = "";
  names:string[] = [];

  submit(){
    this.names.push(this.name);
  }

  // delete(){
  //   this.names.pop();
  // }

  // --------------------------

  studentName:string = "";
  studentAge:number = 0;

  studets:any = [];

  create(){

    let student = {
      name: this.studentName,
      age: this.studentAge
    }

    this.studets.push(student);

  }

  // ============================================

  productName:string = "";
  price:string = "";
  rating:number = 0;
  deliveryDate:any = "";
  freeDelivery:boolean = false;


  products:any = [
    {name:'aa',price:10, rating:3.5, deliveryDate:'12/12/2024', freeDelivery:true},
    {name:'bb',price:102, rating:3.5, deliveryDate:'12/12/2024', freeDelivery:false},
    {name:'cc',price:1440, rating:3.5, deliveryDate:'12/12/2024', freeDelivery:true}
  ];

  submit1(){
    
    let product = {
      name: this.productName,
      price: this.price,
      rating: this.rating,
      deliveryDate: this.deliveryDate,
      freeDelivery: this.freeDelivery
    }

    this.products.push(product);

  }

  delete(i:number){
    this.products.splice(i,1);
  }


}
