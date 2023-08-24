// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-addcomplaint',
//   templateUrl: './addcomplaint.component.html',
//   styleUrls: ['./addcomplaint.component.css']
// })
// export class AddcomplaintComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css']
})
export class AddcomplaintComponent implements OnInit {

  complaintMessage: string = '';
  complaint : Complaint = new Complaint();

  constructor(private complaintservice: ComplaintService, private router: Router) { }

  ngOnInit(): void {
  }


  submitForm() {
    // Replace this logic with your desired form submission logic
    console.log('Complaint Message:', this.complaintMessage);
    this.complaint.complaintMessage = this.complaintMessage;
    this.complaintservice.addcomplaint(this.complaint).subscribe((data:any)=>{

    })
    alert("message sent successfully..!");
    this.router.navigateByUrl("/farmer");
  }

  goBack(){
    this.router.navigateByUrl("/farmer");
  }

}
