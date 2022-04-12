import { Injectable } from '@angular/core';
import { productList } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  

  constructor() { }

  getProducts() {
    return productList
  }
  
}
