import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { FilterComponent } from './filter/filter.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { HttpClientModule } from '@angular/common/http';
import { NoInvoiceComponent } from './no-invoice/no-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { DeleteInvoiceComponent } from './delete-invoice/delete-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HomeNavComponent,
    HomeItemsComponent,
    FilterComponent,
    ClickOutsideDirective,
    NoInvoiceComponent,
    InvoiceDetailsComponent,
    DeleteInvoiceComponent,
    CreateInvoiceComponent,
    InvoiceItemsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
