import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private _http:HttpClient) { }

  public loginPage(customer:Customer) : Observable<any>{
    return this._http.post<any>(`${this.apiServerUrl}/register`,customer)
  }

  public registerPage(customer:Customer) : Observable<any>{
    return this._http.post<any>(`${this.apiServerUrl}/register`,customer)
  }

}
