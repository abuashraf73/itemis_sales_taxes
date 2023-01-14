import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart_service: CartService) { }

  ngOnInit(): void {
    if(this.cart_service.cart_items.length==0){
      this.cart_service.cart_items = JSON.parse(localStorage.getItem('cart_items') || "");
      if(this.cart_service.cart_items!=null || this.cart_service.cart_items!=''){
        this.cart_service.cart_sum.next(this.cart_service.calculateCartPrice(this.cart_service.cart_items))
      }
    }
  }

}
