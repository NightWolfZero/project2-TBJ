import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { ProductService } from '../productService';
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class ProductServices{
   private apiServerUrl = '';
   constructor(private http: HttpClient){} 
   public getProducts(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/product/all`);
   }
}