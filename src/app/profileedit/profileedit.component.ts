import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from '../farmer.service';
import { User } from '../user';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class ProfileeditComponent implements OnInit {

  email: any;
  user: User = new User();
  userRole: any;
  constructor(private router:Router, private farmerservice: FarmerService) { }

  ngOnInit(): void {
const role = localStorage.getItem('userrole');
this.userRole = role;
if(this.userRole === 'ROLE_FARMER'){
  this.userdetails();
}
else{
  this.getsupplierdetails();
}

  }

  getsupplierdetails(){
    this.email = localStorage.getItem('useremail');
    this.farmerservice.getsupplierdetails(this.email).subscribe((data:any)=>{
      this.user =data;
    })
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

  back(){
    if(this.userRole === 'ROLE_FARMER'){
      this.router.navigateByUrl("/farmer");
    }
    else{
      this.router.navigateByUrl("/supplier");
    }

  }
  save(){


  }

  onsubmit(){
    
  }
}
