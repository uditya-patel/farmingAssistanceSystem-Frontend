import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-view-all-advertisements',
  templateUrl: './view-all-advertisements.component.html',
  styleUrls: ['./view-all-advertisements.component.css']
})
export class ViewAllAdvertisementsComponent implements OnInit {

  advertisements: Advertisement[];
  constructor(private farmerservice: FarmerService) { }

  ngOnInit(): void {
    this.getAllAdvertisements();
  }

  getAllAdvertisements(){
    this.farmerservice.getAllAdvertisements().subscribe((data:any)=>{
      this.advertisements = data;
      console.log(data);
    })
  }
}
