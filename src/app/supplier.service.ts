import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from './advertisement';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  useremail: any;
  id: any;

  constructor(private http:HttpClient) { }

  addadvertisement(id:any, advertisement: Advertisement){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    console.log(advertisement);
    console.log(id);
    return this.http.post(`http://localhost:9002/supplier/postAdd?supplierId=${id}`, advertisement, {headers: header});
  }

  getsupplierdetails(mail: string){
    const email = localStorage.getItem('useremail');
    this.useremail = email;
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization":"Bearer "+token});
   return  this.http.get(`http://localhost:9002/supplier/supplierdetails?email=${mail}`, {headers: header});
  }

  getalladvertisements(){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization":"Bearer "+token});
    const userid = localStorage.getItem('userid');
    this.id = userid;
    return this.http.get(`http://localhost:9002/supplier/getAllAdvertisement?supplierId=${this.id}`, {headers:header});
  }
}
