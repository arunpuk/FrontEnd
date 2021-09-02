import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICustomer } from "../model/ICustomer";

@Injectable({
    providedIn:"root"
})
export class CustomerService{
    private apiUrl:string = "http://localhost:3004/customers";

    constructor(private http:HttpClient){ }

    getCustomers():Observable<ICustomer[]>{
        return this.http.get<ICustomer[]>(this.apiUrl);
    }
}