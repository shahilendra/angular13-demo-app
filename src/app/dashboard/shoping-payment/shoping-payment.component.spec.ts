import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingPaymentComponent } from './shoping-payment.component';

describe('ShopingPaymentComponent', () => {
  let component: ShopingPaymentComponent;
  let fixture: ComponentFixture<ShopingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
