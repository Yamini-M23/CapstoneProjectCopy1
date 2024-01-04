import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:9292/admin';


  sendEmailToCustomer(id: string): Observable<any> {

    return this.http.post(`${this.Url}/email/${id}`, null);

 

  }
}
