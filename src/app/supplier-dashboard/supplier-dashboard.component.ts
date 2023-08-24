import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class SupplierDashboardComponent implements OnInit {

  userRole: string = 'supplier';

  name: any;
  constructor() { }

  ngOnInit(): void {
    const username = localStorage.getItem('name');
    this.name =username;
  }

}
