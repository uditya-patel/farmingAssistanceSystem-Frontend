import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userid:any;

  constructor(private http: HttpClient) { }
 
  getProducts() {
    const token = localStorage.getItem('token');
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    const id = localStorage.getItem('id');
    this.userid = id;
   return this.http.get(`http://localhost:9002/farmer/getAllProductByFarmer?farmerId=${this.userid}`, {headers: header});
  }

  addProduct(product: Product){
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({"Authorization": "Bearer "+ token});
    return this.http.post(`http://localhost:9002/farmer/addproduct?farmerId=5`, product, {headers: header});
  }
}
