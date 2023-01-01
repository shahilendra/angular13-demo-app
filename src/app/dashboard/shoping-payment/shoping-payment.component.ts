import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService, Product } from 'src/app/services/shoping/cart.service';

@Component({
  selector: 'app-shoping-payment',
  templateUrl: './shoping-payment.component.html',
  styleUrls: ['./shoping-payment.component.css']
})
export class ShopingPaymentComponent implements OnInit {
  step = 0;  
  products!: Product[];
  form!: FormGroup;
  constructor(private cartService: CartService,  private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createEmptyForm();
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
        .map(item => item.price)
        .reduce((prev, curr) => prev + curr, 0);
    return sum;
  }
  setStep(index: number) {
    this.step = index;
  }
  get f(){
    return this.form.controls;
  }
  createEmptyForm() {
    this.form = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardExpire: new FormControl('', [Validators.required]),
      cardCvvCode: new FormControl('', [Validators.required,  Validators.maxLength(3)]),
      cardName: new FormControl('', Validators.required)
    });
  }
  submit() {
    console.log(this.form.value);
  }
}
