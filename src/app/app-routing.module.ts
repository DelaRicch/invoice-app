import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoInvoiceComponent } from './no-invoice/no-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'no-invoice', component: NoInvoiceComponent },
  { path: 'invoice-details', component: InvoiceDetailsComponent },
  { path: 'delete-invoice', component: DeleteInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
