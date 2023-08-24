import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-view-advertisements',
  templateUrl: './view-advertisements.component.html',
  styleUrls: ['./view-advertisements.component.css']
})
export class ViewAdvertisementsComponent implements OnInit {

  advertisements: Advertisement[];
  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getAllAdvertisements();
  }

  getAllAdvertisements(){
    this.supplierService.getalladvertisements().subscribe((data:any)=>{
      this.advertisements = data;
      console.log(data);
    })
  }

}
