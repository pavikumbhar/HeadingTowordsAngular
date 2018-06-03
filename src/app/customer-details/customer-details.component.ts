
import { CustomerService } from './../service/customer.service';
import { Component, OnInit,Input } from '@angular/core';

import { Customer } from '../models/customer';


@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService : CustomerService) { }
   @Input() customer: Customer

  delete():void{
    this.customerService.delete(this.customer.id).then(() => this.goBack());
  }
goBack():void{
  window.location.replace('');
}
  ngOnInit() {
  }

}
