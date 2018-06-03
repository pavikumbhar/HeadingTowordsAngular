import { Customer } from './../models/customer';
import { CustomerService } from './../service/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

   customers: Customer[];
  selectedCustomer: Customer;
  
  constructor(private customerService: CustomerService) {}

  getCustomers() {
     this.customerService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
     this.getCustomers();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}
