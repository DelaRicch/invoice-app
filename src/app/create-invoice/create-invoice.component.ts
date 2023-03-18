import { Component } from '@angular/core';

interface Div {
  id: number;
  input1: string;
  input2: string;
  input3: string;
}

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss'],
})
export class CreateInvoiceComponent {
  divs: Div[] = [];

  addDiv() {
    const newDiv: Div = {
      id: this.divs.length + 1,
      input1: '',
      input2: '',
      input3: '',
    };
    this.divs.push(newDiv);
  }

  deleteDiv(id: number) {
    this.divs = this.divs.filter((div) => div.id !== id);
  }
}
