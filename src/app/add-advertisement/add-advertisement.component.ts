import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisement } from '../advertisement';
import { SupplierService } from '../supplier.service';


@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit {

  id : any;
  advertisement: Advertisement = new Advertisement();
  constructor(private supplierService: SupplierService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){

    const supplierId = localStorage.getItem('userid');
    this.id = supplierId;

    this.supplierService.addadvertisement(this.id, this.advertisement).subscribe((data:any)=>{
console.log(data);
    })
    alert("advertisement posted successfully");
    this.router.navigateByUrl("/supplier");
  }
}
