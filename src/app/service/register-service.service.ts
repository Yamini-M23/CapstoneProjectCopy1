import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin, admin } from '../modules/admin';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private isAuthenticated = false;

  url:string="http://localhost:9292/admin";

  constructor(private httpClient:HttpClient) {

   }

  addAdmin(newAdmin:Admin)

  {

    admin.push(newAdmin);

        console.log("Admin List",admin);

        return this.httpClient.post(this.url+"/postadmins",newAdmin);

  }

  logout() {

    this.isAuthenticated = false;

  }

}
