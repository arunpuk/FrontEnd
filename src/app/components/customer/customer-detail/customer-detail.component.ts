import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../model/ICustomer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit{
  ivCustomers:ICustomer[] =[];
    
  constructor(private ivCustomerService:CustomerService) { }

  ngOnInit(): void {
    this.ivCustomerService.getCustomers().subscribe((customers)=>{
      this.ivCustomers = customers;
    })
  }

}
