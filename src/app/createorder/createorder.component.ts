import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { Order } from '../order';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {



  products: any[];
  order: Order = new Order();
  
  constructor(private productService: ProductService, 
    private router: Router, 
    private farmerService: FarmerService) { }

  ngOnInit(): void {
    this.getproducts();
  }
getproducts(){
  this.productService.getProducts().subscribe((data: any)=>{
    this.products = data;
    console.log(data);
  })
}

onProductClick(product: any): void {
  console.log('Product clicked:', product);
  // You can add any specific logic you want to perform when a product is clicked
  this.router.navigateByUrl("/order");

}

makeOrder(product: any) {
  console.log('Supplier Email:', product.supplierEmail);
  console.log('Quantity:', product.supplierQuantity);
  console.log('Product clicked:', product);
  this.order.quantiityRequired = product.supplierQuantity;
  this.farmerService.createOrder(product.productId, product.supplierEmail,this.order ).subscribe((data:any)=>{
    console.log("data: =-> "+ data);
  })
  alert("order success");
  this.router.navigateByUrl("/farmer");
  // Here, you can implement the logic to send the order to the supplier
  // For example, you could use a service to handle the API call to the backend
}


}
