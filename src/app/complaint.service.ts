import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Complaint } from './complaint';
import { UpdateComplaintMessage } from './update-complaint-message';
import { Updatestatus } from './updatestatus';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  id: any;

  private apiUrl = 'http://localhost:9002'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAdminComplaints(){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token})
    return this.http.get(`http://localhost:9002/admin/viewComplaint`, {headers: header});
  }

  getFarmerComplaints() {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token})
    return this.http.get(`http://localhost:9002/farmer/viewComplaint`, {headers: header});
  }

  addcomplaint(com:Complaint){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token})
    const userid = localStorage.getItem('id');
    this.id= userid;
    console.log("id is: "+this.id);
    return this.http.post(`http://localhost:9002/farmer/complaint?farmerId=${this.id}`, com , {headers: header});
  }



  // getAllComplaints():  {   //Observable<Complaint[]>
    // const url = `${this.apiUrl}/admin/viewComplaint`;
    // return this.http.get<Complaint[]>(url).pipe(
    //   catchError(this.handleError)
    // );

    

    
  // }

  // private handleError(error: any): Observable<never> {
  //   console.error('An error occurred:', error);
  //   return new Observable<never>((observer) => {
  //     observer.error('Something went wrong. Please try again later.');
  //     observer.complete();
  //   });
  // }

  // updateComplaintStatus(id: number, newStatus: string) {
    adminUpdateComplaintStatus(status: Updatestatus) {
    // const url = `${this.apiUrl}/updateComplaint/${id}`;
    // const body = { status: newStatus };
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    // this.http.put(url, body, httpOptions)
    //   .subscribe(successCallback, errorCallback);

    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+token});
    return this.http.put(`http://localhost:9002/admin/updateComplaint`, status, {headers:header});
  }

  farmerUpdateComplaintMessage(complaintMessage: UpdateComplaintMessage) {
    // const url = `${this.apiUrl}/updateComplaint/${id}`;
    // const body = { status: newStatus };
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
    // this.http.put(url, body, httpOptions)
    //   .subscribe(successCallback, errorCallback);

    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+token});
    return this.http.put(`http://localhost:9002/farmer/updateComplaint`, complaintMessage, {headers:header});
  }


}
