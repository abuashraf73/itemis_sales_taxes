import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cart_service: CartService, private router: Router) { }

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart_service.emptyCart();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  print_section = false;
  today_date: any = new Date();
  placeOrder(){
  // Call to the API to forward the order
    this.showSuccess()
  }

  showSuccess() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your order has been placed.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
