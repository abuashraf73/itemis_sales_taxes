import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cart_service: CartService,
              private router: Router){}

  ngOnInit(): void {}

  goToCart(){
    if(this.cart_service.cart_items.length==0){
       this.noSuccess()
    }else{
      this.router.navigateByUrl('/cart');
    }
  }


  noSuccess(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Your Cart is empty!'
    });
  }

}
