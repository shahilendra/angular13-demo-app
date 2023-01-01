import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService, Product } from 'src/app/services/shoping/cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  products!: Product[];
    
  constructor(private cartService: CartService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.get()
    .subscribe((data: Product[]) => {
      this.products = data;
      this.toastr.success('Success', 'Products load Successfully');
    } );
  }
  onContinue() {
    this.router.navigate(['/checkout']);
  }
}
