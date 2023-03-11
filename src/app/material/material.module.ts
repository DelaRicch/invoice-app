import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

const material = [MatSelectModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
