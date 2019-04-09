import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cart } from '../../../classes/cart';
import { Product } from '../../../classes/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService) { }

  cartProducts: Product[];
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.cartService.cartState.subscribe((state: Cart) => {
      this.cartProducts = state.cartProducts;
    });
  }

  removeProduct(productId: number) {
    this.cartService.removeProduct(productId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
