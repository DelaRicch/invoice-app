import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.scss'],
})
export class HomeItemsComponent implements OnInit {
  jsonData: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('../../assets/data.json').subscribe((data) => {
      this.jsonData = data;
    });
  }
}
