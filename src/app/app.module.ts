import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './components/app.component';
import { ShoppingCartComponent } from './components/cart/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './components/cart/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './components/cart/shopping-list-item/shopping-list-item.component';

// Services
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
