import { CustomerService } from './../service/customer.service';
import { Customer } from './../models/customer';
import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
customer=new Customer;

submitted = false;
constructor(private customerService: CustomerService,
            private location: Location) {}

ngOnInit() {
}

newCustomer():void{
  this.submitted=false;
  this.customer=new Customer();
}

private save():void{
  this.customerService.create(this.customer);
}

onSubmit(){
  this.submitted=true;
  this.save();
}

goBack():void{
  this.location.back();
}

}
