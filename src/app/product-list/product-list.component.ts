import { products } from '../products';
import { Component } from '@angular/core';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product = products;

  share(): void {
    window.alert('The product has been added to cart!');
  }
  addItem(): void{
    window.alert('The product has been added!');
  }
  
}

