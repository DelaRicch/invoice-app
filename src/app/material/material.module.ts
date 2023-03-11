import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const material = [MatSelectModule, MatCheckboxModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
