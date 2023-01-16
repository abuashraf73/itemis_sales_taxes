import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart_empty_alert: boolean = false;

  constructor(public cart_service: CartService,
              private router: Router,
              private toastr: ToastrService
              ){}

  ngOnInit(): void {}

  goToCart(){
    if(this.cart_service.cart_items.length==0){
      // this.cart_empty_alert=true;
      // setTimeout(()=>this.cart_empty_alert=false, 5000)
       this.noSuccess()
    }else{
      this.router.navigateByUrl('/cart');
    }
  }


  noSuccess(){
    this.toastr.error("Your cart is empty.", "Attention")
  }

}
