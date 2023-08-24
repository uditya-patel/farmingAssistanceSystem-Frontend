import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { User } from '../user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  userEmail: any;
  user: User = new User();
  userrole: any;
  constructor(private router: Router, private farmerservice:FarmerService) { }

  ngOnInit(): void {
    const role = localStorage.getItem('userrole');
    this.userrole = role;
    if(this.userrole === 'ROLE_SUPPLIER'){
        this.getSupplierDetails();
    }
    else{
      this.getfarmerdeatils();
    }
    
  }


  getfarmerdeatils(){
    this.userEmail = localStorage.getItem("useremail");
    
    this.farmerservice.getFarmerDetails(this.userEmail).subscribe((data: any)=>{
      this.user=data;
      console.log(data);

    })
  }

  getSupplierDetails(){
    this.userEmail = localStorage.getItem("useremail");
    this.farmerservice.getsupplierdetails(this.userEmail).subscribe((data:any)=>{
      this.user = data;
    })
  }

  back(){
    if(this.userrole === 'ROLE_FARMER'){
      this.router.navigateByUrl("/farmer");
    }
     else{
      this.router.navigateByUrl("/supplier");
     }
  }

  edit(){
    this.router.navigateByUrl("/edit-profile2");
  }

}
