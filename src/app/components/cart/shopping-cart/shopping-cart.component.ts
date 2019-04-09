import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../../../services/cart.service';
import { Product } from '../../../classes/product';
import { Cart } from '../../../classes/cart';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) { }

  products: Product[];
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.cartService.cartState.subscribe((state: Cart) => {
      this.products = state.products.filter(product => product.isPublished);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
