import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from './order';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) { }

  
  getsupplierdetails(email: string){

    const token = localStorage.getItem("token");
    console.log(token);
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    console.log(header);
    
    
   return this.http.get(`http://localhost:9002/supplier/supplierdetails?email=${email}`, { headers: header}  )
  }

  getFarmerDetails(email: string) {
    const token = localStorage.getItem("token");
    console.log(token);
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    console.log(header);
    
    
   return this.http.get(`http://localhost:9002/farmer/getFarmerByEmail?email=${email}`, { headers: header}  )
  }

  addProduct(product: Product){
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('id');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    console.log("this is product...");
    console.log(product);

    return this.http.post(`http://localhost:9002/farmer/addproduct?farmerId=${userid}`, product, {headers: header});
  }

  getAllAdvertisements(){
    const token = localStorage.getItem('token');

    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    return this.http.get(`http://localhost:9002/farmer/getAllAdvertisement`, {headers: header});
  }

  createOrder(productId: number, supplierEmail: string, order: Order){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    return this.http.post(`http://localhost:9002/farmer/createOrder?productId=${productId}&supplierEmail=${supplierEmail}`, order, {headers: header});
  }
}
