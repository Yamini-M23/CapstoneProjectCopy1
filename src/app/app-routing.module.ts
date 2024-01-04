import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AdminComponent } from './home/login/admin/admin.component';
import { WiredProductsComponent } from './home/login/admin/wired-products/wired-products.component';
import { ViewPlansComponent } from './home/login/admin/view-plans/view-plans.component';
import { AddPlansComponent } from './home/login/admin/add-plans/add-plans.component';
import { WirelessProductsComponent } from './home/login/admin/wireless-products/wireless-products.component';
import { SuperAdminComponent } from './home/login/super-admin/super-admin.component';
import { SAadminsComponent } from './home/login/super-admin/saadmins/saadmins.component';
import { SaproductsComponent } from './home/login/super-admin/saproducts/saproducts.component';
import { LogoutComponent } from './home/login/logout/logout.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
  path:'login',
  component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'superadmin',
    component:SuperAdminComponent
  }, 
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'viewplans',
    component:ViewPlansComponent
  },
  {
    path:'addplans',
    component:AddPlansComponent
  },
  {
    path:'wired',
    component:WiredProductsComponent
  },
  {
    path:'wireless',
    component:WirelessProductsComponent
  },
  {
    path:'saadmins',
    component:SAadminsComponent
  }, 
  {
    path:'saproducts',
    component:SaproductsComponent
  }, 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
