import { Component,Input, Output, EventEmitter, OnInit } from "@angular/core";
import { ICountry } from "src/app/model/Country";
import { ICustomer, Customer } from "src/app/model/Customer";
import { CountryService } from "src/app/services/country.service";

@Component({
    selector: 'app-customer-add',
    templateUrl: './customer-add.component.html',
    styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent implements OnInit{
    @Input() customer:ICustomer;

    @Output() closeclick = new EventEmitter();
    @Output() saveclick:EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

    ivCountries:ICountry[];

    constructor(private countryservice:CountryService){

    }

    ngOnInit(){
       this.countryservice.getCountries().subscribe((countries)=>{
           this.ivCountries=countries;
       });
    }

    onCloseClick(){
        this.closeclick.emit();
    }

    onSaveClick(){
        this.saveclick.emit(this.customer);
    }
}