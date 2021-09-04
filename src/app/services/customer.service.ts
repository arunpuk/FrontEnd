import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICustomer } from "../model/Customer";

@Injectable({
    providedIn:"root"
})
export class CustomerService{
    private apiUrl:string = "http://localhost:3004/customers";

    constructor(private http:HttpClient){ }

    getCustomers():Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(this.apiUrl);
    }

    saveCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.http.post<ICustomer>(this.apiUrl,customer);
    }

    updateCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.http.put<ICustomer>(this.apiUrl,customer);
    }

    deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        const apiDeleteUrl = `${this.apiUrl}/${customer.id}`;
        return this.http.delete<ICustomer>(apiDeleteUrl);
    }
}