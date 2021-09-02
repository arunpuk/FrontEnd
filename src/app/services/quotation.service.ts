import { ApplicationModule, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

import { IQuotation } from '../model/IQuotation';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private apiUrl:string = "http://localhost:3004/quotations";

  constructor(private http:HttpClient) { }

  getQuotations(): Observable<IQuotation[]> {
    return this.http.get<IQuotation[]>(this.apiUrl);
  }

  deleteQuotation(quotation:IQuotation):Observable<IQuotation>{
    const apiDeleteUrl = `${this.apiUrl}/${quotation.id}`;
    return this.http.delete<IQuotation>(apiDeleteUrl);

  }

}
