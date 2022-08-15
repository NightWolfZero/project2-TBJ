import { environment } from './../environments/environment';
import { product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    private apiServerUrl =environment.apiBaseUrl;
   
    constructor(private http: HttpClient){}
   
    public getProducts():Observable<product[]>{
      return this.http.get<product[]>(`${this.apiServerUrl}/product/all`);
    }

    public addProducts(products: product):Observable<product>{
        return this.http.post<product>(`${this.apiServerUrl}/product/add`, products);
      }

      public updateProducts(products: product):Observable<product>{
        return this.http.put<product>(`${this.apiServerUrl}/product/update`, products);
      }

      public deleteProducts(productsId: number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productsId}`,);
      }
}






