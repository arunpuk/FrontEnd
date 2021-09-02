import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './components/customer/customer.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CanvasNavbarComponent } from './components/canvas-navbar/canvas-navbar.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { ActiveQuotationsComponent } from './components/active-quotations/active-quotations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CanvasNavbarComponent,
    QuotationComponent,
    ActiveQuotationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
