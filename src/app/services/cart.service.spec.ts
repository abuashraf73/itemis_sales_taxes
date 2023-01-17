import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be able to add item in the cart', () => {
    let cart_ser = service;
    let result = cart_ser.putInCart({});
    expect(result).toBe(true);
  });
});
