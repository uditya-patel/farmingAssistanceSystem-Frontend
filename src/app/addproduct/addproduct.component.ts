import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private farmerService: FarmerService, private router: Router) { }

  addproduct : Product = new Product();
  ngOnInit(): void {
  }

  product: Product = {
    productName: '',
    productUnitPrice: 0,
    productQuantity: 0,
    productImgUrl: ''
  };

  onSubmit() {
    // Here you can handle the form submission logic, e.g., save the product to a database or perform any other actions
    // console.log('Form submitted:', this.product);
    this.addproduct = this.product;
    
    this.farmerService.addProduct(this.addproduct).subscribe((data: any)=> {

    })
    alert("product added...");
this.router.navigateByUrl("/farmer");
  }
}
