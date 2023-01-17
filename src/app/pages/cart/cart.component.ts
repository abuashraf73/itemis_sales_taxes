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
  /**
   * @description Function to display today's date and time to the receipt
  */
  today_date: any = new Date();

  constructor(public cart_service: CartService, private router: Router) { }

  ngOnInit(): void {
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
  /**
   * @description Function to notify user that the cart will be deleted and if they wish to do that knowingly.
   */
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

  /**
   * @description Function to forward data to the server and notify the user that the order is placed.
   */
  placeOrder(){
  // Call to the API to forward the order
    this.showSuccess()
  }
  /**
   * @description Function to notify the user that the order has been placed. 
  */
  showSuccess() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Your order has been placed.',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
