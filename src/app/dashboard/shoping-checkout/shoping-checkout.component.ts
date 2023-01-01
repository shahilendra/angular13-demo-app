import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService, Product } from 'src/app/services/shoping/cart.service';

@Component({
  selector: 'app-shoping-checkout',
  templateUrl: './shoping-checkout.component.html',
  styleUrls: ['./shoping-checkout.component.css']
})
export class ShopingCheckoutComponent implements OnInit {
  products!: Product[];
    
  constructor(private cartService: CartService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.get()
    .subscribe((data: Product[]) => {
      this.products = data;
      this.toastr.success('Success', 'Products load Successfully');
    } );
  }
  onCountinue() {
    this.router.navigate(['/payment']);
  }
  sumOfAmount(): number {
    let  sum = 0;
    if(this.products && this.products.length > 0)
      sum = this.products
        .map(item => item.price*item.quantity)
        .reduce((prev, curr) => prev + curr, 0);
    return sum;
  }

  onAdd(item: Product) {
    item.quantity = item.quantity + 1;
  }
  onDelete(item: Product) {
    item.quantity = item.quantity - 1;
    if(item.quantity === 0) {
      this.products = this.products.filter((product) => product.name !== item.name);
    }
  }
  onPrice(product: Product): number {
    return product?.price * product?.quantity;
  }
}
