import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  backURL= environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  GetCustomer(uname:string): Observable<Customer>{
    return this.http.get<Customer>(this.backURL+"profile/"+uname)
  }

  addCustomer(customer:Customer): Observable<Customer>{
      return this.http.post<Customer>(this.backURL+"customer", customer)
    }

  updateCustomer( customer:Customer): Observable<Object>{
      return this.http.put(this.backURL+"update", customer)
    }

}