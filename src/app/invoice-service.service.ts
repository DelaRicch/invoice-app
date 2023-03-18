import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceServiceService implements OnInit {
  jsonData: any;
  capitalized: any;

  constructor(private http: HttpClient) {}

  getAllInvoice() {
    return this.jsonData;
  }

  ngOnInit() {
    this.http.get('../../assets/data.json').subscribe((data) => {
      this.jsonData = data;
    });
  }
}
