import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cart: Product[];
  URL: string;

  constructor(private Http: HttpClient) {
    this.URL = 'http://localhost:3000/api';
  }

  ngOnInit() {
    this.Http.get(this.URL)
      .subscribe((result: any) => {
        this.cart = result;
      });
  }
}
