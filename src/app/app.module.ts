import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AdminComponent } from './home/login/admin/admin.component';
import { WiredProductsComponent } from './home/login/admin/wired-products/wired-products.component';
import { WirelessProductsComponent } from './home/login/admin/wireless-products/wireless-products.component';
import { BusinessProductsComponent } from './home/login/admin/business-products/business-products.component';
import { ViewPlansComponent } from './home/login/admin/view-plans/view-plans.component';
import { AddPlansComponent } from './home/login/admin/add-plans/add-plans.component';
import { SuperAdminComponent } from './home/login/super-admin/super-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryFilterPipe } from './Pipe/category-filter.pipe';
import { ProductSubCategoryPipe } from './Pipe/product-sub-category.pipe';
import { ProductCategoryPipe } from './Pipe/product-category.pipe';
import { SAadminsComponent } from './home/login/super-admin/saadmins/saadmins.component';
import { SaproductsComponent } from './home/login/super-admin/saproducts/saproducts.component';
import { ProductStatusFilterPipe } from './Pipe/product-status-filter.pipe';
import { LogoutComponent } from './home/login/logout/logout.component';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    WiredProductsComponent,
    WirelessProductsComponent,
    BusinessProductsComponent,
    ViewPlansComponent,
    AddPlansComponent,
    SuperAdminComponent,
    CategoryFilterPipe,
    ProductSubCategoryPipe,
    ProductCategoryPipe,
    SAadminsComponent,
    SaproductsComponent,
    ProductStatusFilterPipe,
    LogoutComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
