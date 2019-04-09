import { Component, Input } from '@angular/core';
import { Product } from '../../../classes/product';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})

export class ShoppingListItemComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  addProduct(product: Product) {
    this.cartService.addProduct(product);
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product.id);
  }
}
