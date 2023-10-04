import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  products: any[] = []; // Your product data

  constructor(private cartService: CartService, private productService: ProductService) {}

  addToCart(theProduct: Product) {
    console.log(`adding to cart: ${theProduct.productName}, ${theProduct.productUnitPrice}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }
  

//   products: any[];
  
//   constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }
getproducts(){
  this.productService.getProducts().subscribe((data: any)=>{
    this.products = data;
    console.log(data);
  })
}
// onProductClick(product: any): void {
//   console.log('Product clicked:', product);
//   // You can add any specific logic you want to perform when a product is clicked
// }


}
