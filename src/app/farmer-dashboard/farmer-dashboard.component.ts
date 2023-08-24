import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { ProductService } from '../product.service';
import { User } from '../user';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {

  products: any[];
  name: any ;
  email: any;
  user: User = new User();
  constructor(private productService: ProductService, private farmerservice: FarmerService) { }

  ngOnInit(): void {
    this.userdetails();
    this.name = localStorage.getItem('name');
    this.getproducts();
    
  }
  

  userdetails(){
    this.email = localStorage.getItem("useremail");
    this.farmerservice.getFarmerDetails(this.email).subscribe((data: any)=>{
      this.user =data;
      console.log(this.user.id);
      const userid = this.user.id;
      localStorage.setItem('id', userid.toString());
      localStorage.setItem('name',this.user.name);
      
    })
  }

  getproducts(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      
      // console.log(data);
    })
  }

}
