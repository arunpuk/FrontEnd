import { ICountry } from "./Country";

export interface ICustomer{
    id?:number,
    FirstName:string,
    LastName:string,
    Address1: string,
    Address2:string,
    City: string,
    State:string,
    Country:ICountry,
    Pincode:string,
    Email:string,
    Phone: string
}

export class Customer implements ICustomer{
    constructor(id?:number){
        this.id = id;
    }

    id?:number;
    FirstName:string;
    LastName:string;
    Address1: string;
    Address2:string;
    City: string;
    State:string;
    Country:ICountry;
    Pincode:string;
    Email:string;
    Phone: string;
}