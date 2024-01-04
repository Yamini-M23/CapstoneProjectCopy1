import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRequest } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class AddPlanServiceService {

  constructor(private httpclient:HttpClient) { }

  url:string="http://localhost:8585/add";

  // getPlans()
  // {
  //  return this.httpclient.get(this.url+"/getplans");
  // }

  getPlan(productcategory:any)
  {
   return this.httpclient.get(this.url+"/getplans/"+productcategory);
  }

  addPlan(products:ProductRequest)
  {
    return this.httpclient.post(this.url+"/addplans",products);
  }
}
