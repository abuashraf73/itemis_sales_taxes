import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart_service: CartService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log(this.cart_service.cart_items)
    if(this.cart_service.cart_items.length==0){
      let res: any = localStorage.getItem('cart_items');
      this.cart_service.cart_items = JSON.parse(res);
      if(this.cart_service.cart_items!=null || this.cart_service.cart_items!=''){
        this.cart_service.cart_sum = (this.cart_service.calculateCartPrice(this.cart_service.cart_items))
      }
      if(res==null){
        this.router.navigate(['/']);
      }
    }
  }

  clearCart(){

  }

  print_section = false;
  today_date: any = new Date();
  placeOrder(){
  // Call to the API to forward the order
    this.showSuccess()
  }

  showSuccess() {
    this.toastr.success('Nice! Your order has been placed successfully');
  }

}
