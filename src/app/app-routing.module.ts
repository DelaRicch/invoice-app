import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoInvoiceComponent } from './no-invoice/no-invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'no-invoice', component: NoInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
