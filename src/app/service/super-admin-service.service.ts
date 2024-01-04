import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminServiceService {

  url:string="http://localhost:9292/admin"

  constructor(private http:HttpClient) { }

  validateAdmins(email:any,password:any){

    console.log(email,password);

  const logs={email,password};
 
  return this.http.post<string>(this.url+"/credentialsValidate",logs);
  }

getAdmins()
{
  return this.http.get(this.url+"/getadmins");
}

approveAdmins(admins:any){
  return this.http.post("http://localhost:9292/admin/approveadmins",admins)

}

deleteAdmins(admins:any)
{
  console.log(admins);
  return this.http.post("http://localhost:9292/admin/deleteadmins",admins)
}

editProducts(products:any)
{
  console.log(products)
  return this.http.post("http://localhost:8585/add/editproducts",products)
}

deletePoducts(products:any)
{
  return this.http.post("http://localhost:8585/add/deleteproducts",products)
}

editWirelessProducts(products:any)
{
  return this.http.post("http://localhost:8585/add/editwirelessproducts",products)
}

deleteWirelessProducts(products:any)
{
  return this.http.post("http://localhost:8585/add/deletewirelessproducts",products)
}

editWirelineProducts(products:any)
{
  return this.http.post("http://localhost:8585/add/editwirelineproducts",products)
}

deleteWirelineProducts(products:any)
{
  return this.http.post("http://localhost:8585/add/deletewirelineproducts",products)
}
}
