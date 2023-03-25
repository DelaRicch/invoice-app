import { Component, HostListener } from '@angular/core';

interface ItemDiv {
  id: number;
  itemName: string;
  quantity: number;
  price: number;
  total: number;
}

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.scss'],
})
export class InvoiceItemsComponent {
  items: ItemDiv[] = [];
  isDesktop: boolean = true;

  constructor() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  checkWindowSize() {
    this.isDesktop = window.innerWidth >= 768;
  }

  addItem() {
    const newItem: ItemDiv = {
      id: this.items.length + 1,
      itemName: '',
      quantity: 0,
      price: 0.0,
      total: 0.0,
    };
    this.items.push(newItem);
  }

  deleteItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  calculateTotal(item: ItemDiv) {
    item.total = item.price * item.quantity;
  }
}
