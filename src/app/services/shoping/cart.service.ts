import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
export interface Product {
  name: string;
  url: string;
  configuraion: string;
  price: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  get() {
    let url = 'assets/products.json';
    return this.http.get<Product[]>(url).pipe(retry(3));
  }
}
