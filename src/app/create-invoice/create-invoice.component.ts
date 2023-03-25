import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface PaymentTerms {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss'],
})
export class CreateInvoiceComponent {
  dateForm = FormGroup;
  nextDate: string = '';

  date = new FormControl(new Date());
  today = new Date();

  // Payment Terms
  termsVal: PaymentTerms[] = [
    { value: '1', viewValue: 'Net 1 Day' },
    { value: '7', viewValue: 'Net 7 Days' },
    { value: '14', viewValue: 'Net 14 Days' },
    { value: '30', viewValue: 'Net 30 Days' },
  ];

  termsControl = new FormControl(this.termsVal[3].value);
  form = new FormGroup({
    terms: this.termsControl,
  });
}
