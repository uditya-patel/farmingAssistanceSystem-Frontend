import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderData = {
    supplierEmail: '',
    quantityRequired: 0
  };

  onSubmit() {
    // Your logic to handle form submission goes here
    // You can access the entered data using this.orderData.supplierEmail and this.orderData.quantityRequired
    // For example, you can send the order data to an API, save it to a database, or perform any other actions based on your application requirements
    console.log('Form submitted!');
    console.log('Supplier Email:', this.orderData.supplierEmail);
    console.log('Quantity Required:', this.orderData.quantityRequired);
  }

}
