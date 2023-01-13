import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket_price: any;
  constructor(private cart_service: CartService){
    this.basket_price = this.cart_service.getCartSum();
    console.log("🚀 ~ file: header.component.ts:14 ~ HeaderComponent ~ constructor ~ this.basket_price", this.basket_price)

  }

  ngOnInit(): void {
  }

}
