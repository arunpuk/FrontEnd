import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../model/Customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit{
  @Input() customer:ICustomer;
  
  @Output() deleteclick:EventEmitter<ICustomer> = new EventEmitter<ICustomer>();
  @Output() editclick:EventEmitter<ICustomer> = new EventEmitter<ICustomer>();
 
  ivCustomers:ICustomer[] =[];

  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.customerservice.getCustomers().subscribe((customers)=>{
      this.ivCustomers = customers;
    })
  }

  onClickEdit(customer:ICustomer){
    this.editclick.emit(customer);
  }

  onClickDelete(customer:ICustomer){
      console.log(customer);
      this.deleteclick.emit(customer);
  }
}
