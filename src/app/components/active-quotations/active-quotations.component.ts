import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';

import { IQuotation } from '../../model/IQuotation';

@Component({
  selector: 'app-active-quotations',
  templateUrl: './active-quotations.component.html',
  styleUrls: ['./active-quotations.component.css']
})
export class ActiveQuotationsComponent implements OnInit {
  ivQuotations:IQuotation[] = [];

  constructor(private ivQuotationService: QuotationService) { }

  ngOnInit(): void {
    this.ivQuotationService.getQuotations()
    .subscribe((quotations)=>this.ivQuotations = quotations);
  }

  deleteQuotation(quotation:IQuotation){
    this.ivQuotationService.deleteQuotation(quotation).subscribe(()=>
    this.ivQuotations = this.ivQuotations.filter(piX=>piX.id !==quotation.id));
  }
}
