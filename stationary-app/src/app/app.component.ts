import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  products:any

  constructor(private _products: ProductsService){}
  
  ngOnInit(): void {
    this.products = this._products.getProducts()
  }
}
