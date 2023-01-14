import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  basket_price: any;
  cart_empty_alert: boolean = false;
  constructor(private cart_service: CartService, private router: Router){
    this.basket_price = this.cart_service.getCartSum();
  }

  ngOnInit(): void {
  }

  goToCart(){
    if(this.cart_service.cart_items.length==0){
      this.cart_empty_alert=true;
      setTimeout(()=>this.cart_empty_alert=false, 5000)
    }else{
      this.router.navigateByUrl('/cart');
    }
  }

}
