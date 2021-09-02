import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuotation } from '../../model/IQuotation';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  @Input() quotation: IQuotation;

  @Output() onDeleteQuotation:EventEmitter<IQuotation> = new EventEmitter<IQuotation>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(){
    this.onDeleteQuotation.emit(this.quotation);
  }
}
