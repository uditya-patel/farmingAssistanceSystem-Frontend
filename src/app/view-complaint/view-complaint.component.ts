import { Component, OnInit } from '@angular/core';
import { Complaint } from '../complaint';
import { ComplaintService } from '../complaint.service';
import { UpdateComplaintMessage } from '../update-complaint-message';
import { Updatestatus } from '../updatestatus';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  complaints: Complaint[]; // Replace 'any' with the actual type of your complaint object

  updatestatus: Updatestatus = new Updatestatus();

  updateComplaintMessage: UpdateComplaintMessage = new UpdateComplaintMessage();


  constructor(private complaintService: ComplaintService) {}
  role = localStorage.getItem('userrole');
  ngOnInit(): void {
   
    
    console.log(this.role);
    if(this.role === 'ROLE_ADMIN'){
      this.adminComplaints();
    }
    else {
      this.farmerComplaints();
    }
   

  }

  adminComplaints() {

    this.complaintService.getAdminComplaints().subscribe((data:any)=>{
      this.complaints = data;
      console.log(this.complaints);
    })
  }

  farmerComplaints() {
    this.complaintService.getFarmerComplaints().subscribe((data:any)=>{
      this.complaints = data;
      console.log(this.complaints);
    })
  }




  adminUpdateStatus(complaintId: number) {
    const complaint = this.complaints.find(c => c.id === complaintId);

    this.updatestatus.id = complaintId;
    this.updatestatus.status = complaint?.newStatus;
    console.log(this.updatestatus);
    this.complaintService.adminUpdateComplaintStatus(this.updatestatus).subscribe((data:any)=>{

    })
  }


    farmerUpdateComplaintMssg(complaintId: number) {
      const complaint = this.complaints.find(c => c.id === complaintId);
      const role = localStorage.getItem('userrole');
  
      
      if(role === 'ROLE_FARMER') {
        this.updateComplaintMessage.id = complaintId;
      this.updateComplaintMessage.complaintMessage = complaint?.newComplaintMessage;
      console.log(this.updateComplaintMessage);
      this.complaintService.farmerUpdateComplaintMessage(this.updateComplaintMessage).subscribe((data:any)=>{
        console.log('Complaint message updated successfully');
      })
    } else {
      console.log('User does not have the required role to update complaint messages.');

    }

    // if (complaint && typeof complaint.newStatus === 'string') {
    //   this.complaintService.updateComplaintStatus(
    //     complaintId,
    //     complaint.newStatus!,
    //     () => {
    //       complaint.status = complaint.newStatus!; // Update the status in the list
    //     },
    //     (error: any) => {
    //       console.error('Error updating status:', error);
    //     }
    //   );
    // }

}

}
