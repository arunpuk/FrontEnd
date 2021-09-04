import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICountry } from "../model/Country";

@Injectable({
    providedIn: "root"
})
export class CountryService{
    private apiUrl:string = "http://localhost:3004/country";

    constructor(private http:HttpClient){

    }

    getCountries(): Observable<ICountry[]>{
        return this.http.get<ICountry[]>(this.apiUrl);
    }

}