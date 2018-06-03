import { CustomerService } from './../service/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  lastName:string;
  customers:Customer[];
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  this.lastName="";
  }

  private searchCustomers(){
    this.customerService.getCustomersByLastName(this.lastName).then(customers=>this.customers=customers);
  }

  onSubmit(){
    this.searchCustomers();
  }
}
