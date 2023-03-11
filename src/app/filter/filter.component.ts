import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  isShown: boolean = false;
  rotateArrow: string = '0deg';

  toggleFilter() {
    this.isShown = !this.isShown;
    this.rotateArrow = this.isShown ? '180deg' : '0deg';
  }

  clickedOutside() {
    this.isShown = false;
    this.rotateArrow = this.isShown ? '180deg' : '0deg';
  }
}
