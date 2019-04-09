import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Cart } from '../classes/cart';
import { Product } from '../classes/product';

const url = 'http://localhost:3000/api';

@Injectable()
export class CartService {
  private cartSubject = new Subject<Cart>();
  cartState = this.cartSubject.asObservable();

  cartProducts: Product[];
  products: Product[];

  constructor(private httpclient: HttpClient) {
    this.getAllProducts().subscribe(p => {
      this.products = p;
      this.cartProducts = [];
      this.cartSubject.next({ products: p, cartProducts: [] });
    });
  }

  addProduct(product: any) {
    this.cartProducts.push(product); // Add to Cart
    this.products = this.products.filter(p => p.id !== product.id); // Remove from Product List
    this.cartSubject.next({ products: this.products, cartProducts: this.cartProducts });
  }

  removeProduct(id: number) {
    const product = this.cartProducts.filter(p => p.id === id)[0]; // Get The Products
    this.cartProducts = this.cartProducts.filter((item) => item.id !== id); // Remove from Cart
    this.products.push(product); // Add to Product List
    this.cartSubject.next({ products: this.products, cartProducts: this.cartProducts });
  }

  getAllProducts(): Observable<any> {
    return this
      .httpclient
      .get(url);
  }
}
