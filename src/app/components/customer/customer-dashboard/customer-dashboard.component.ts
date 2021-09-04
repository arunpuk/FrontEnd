import { Component, OnInit } from "@angular/core";
import { ICustomer,Customer } from "src/app/model/Customer";
import { CustomerService } from "src/app/services/customer.service";

@Component({
    selector: 'app-customer-dashboard',
    templateUrl: './customer-dashboard.component.html',
    styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit{
    isShowCustomerAdd:boolean = false;
    ivCustomer:ICustomer;

    constructor(private custservice:CustomerService) { }
  
    ngOnInit(): void {
      
    }
  
    onAddClick(){
      this.ivCustomer = new Customer(-1);
      this.isShowCustomerAdd = true;
    }

    onCloseClick(){
      this.isShowCustomerAdd = false;
    }

    onSaveClick(customer:ICustomer){
      console.log(customer);
      this.custservice.saveCustomer(customer).subscribe((customer)=>{
      })
      this.isShowCustomerAdd = false;
    }
    onEditClick(customer:ICustomer){
      this.ivCustomer = customer;
      this.isShowCustomerAdd = true;
      console.log(customer);
    }

    onDeleteClick(customer:ICustomer){

    }
}