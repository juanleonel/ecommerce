import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  public products = Array<Product>();

  constructor() { }

  ngOnInit(): void {
    let product1 = new Product("AA1","Producto 1 test",120.1,"google.com",2);
    let product2 = new Product("BB1","Producto 2 test",100.1,"google.com",1);
    product2.sale = true;
    let product3 = new Product("CC1","Producto 3 test",90.5,"google.com",10);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
  }

  
  toggleFavorite(event){
    console.log(event);
  }

  increment(id){
    let product = this.products.find(x => x.id == id);
    product.quantity++; 
  }
  
  decrement(id){
    let product = this.products.find(x => x.id == id);
    console.log(product.quantity);
    
    if(product.quantity <= 0){
      return 0;
    }
    else{
      product.quantity--;
    }    
     
  }

}
