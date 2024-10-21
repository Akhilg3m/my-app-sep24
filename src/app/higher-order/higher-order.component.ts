import { Component } from '@angular/core';

@Component({
  selector: 'app-higher-order',
  templateUrl: './higher-order.component.html',
  styleUrls: ['./higher-order.component.css']
})
export class HigherOrderComponent {

  category:string = "";
  term:string = ""

  products = [
    { name: 'mobile', category: 'gadgets', price: 10000, rating: 5 },
    { name: 'laptop', category: 'gadgets', price: 50000, rating: 4.5 },
    { name: 'tv', category: 'gadgets', price: 70000, rating: 4 },
    { name: 'shirt', category: 'fashion', price: 3000, rating: 3 },
    { name: 'pant', category: 'fashion', price: 4000, rating: 5 },
    { name: 'saree', category: 'fashion', price: 5000, rating: 4 },
    { name: 'flipflop', category: 'footware', price: 1000, rating: 3.5 },
    { name: 'shoes', category: 'footware', price: 3000, rating: 4.2 },
    { name: 'belt', category: 'accessories', price: 600, rating: 2.5 },
    { name: 'specs', category: 'accessories', price: 999, rating: 3.8 },
    { name: 'watch', category: 'accessories', price: 4000, rating: 5 },
  ]

  search(){
    this.products = this.products.filter((product)=>product.name.includes(this.term));
  }

  categoryChange(){
    this.products = this.products.filter((product)=>product.category == this.category)
  }

  add20(){
    this.products = this.products.map(product=>{
      product.price = product.price+20;
      return product;
    })
  }

  discount(){
    this.products = this.products.map(product=>{
      product.price = product.price/2;
      return product;
    })
  }

  pricelh(){
    this.products.sort((a,b)=>a.price-b.price);
  }

  pricehl(){
    this.products.sort((a,b)=>b.price-a.price);
  }

  totalPrice(){
    var total = this.products.reduce((sum,product)=>sum+product.price,0);
    alert("Total cart price: "+total);
  }


}
