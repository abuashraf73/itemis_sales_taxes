import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  /**
   *
   */
  all_categories_list: any = [];
  /**
   * @description variable to store all the articles from
   */
  all_articles_list:any = [];

  constructor(private crud_service: CrudService, public cart_service: CartService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllArticles();
  }
  /**
   * @description Function to fetch categories from database
   * @returns list of categories array
   */
  getAllCategories(){
    this.all_categories_list =  this.crud_service.getAllCategories();
    return this.all_categories_list;
  }
  /**
   * @description Function to fetch articles from database
   * @returns list of articles array
   */
  getAllArticles(){
    this.all_articles_list =  this.crud_service.getAllArticles();
    return this.all_articles_list;
  }
  /**
   * @description Function to Put item in the cart list
   * @param article item object
   * @returns boolean true if object is added, false if not
   */
  addToCart(article: any){
    let result = false;
    if(article!=undefined || article!=null){
      this.cart_service.putInCart(article);
      this.showSuccess();
      this.applyCss();
      result = true;
    }
    return result;
  }
 /**
  * @description Function to increment item in the cart
  * @param article item object
  * @returns boolean true if object is added, false if not
  */
  addItem(article:any){
    let result = false;
    if(article!=undefined || article!=null){
      this.cart_service.putInCart(article);
      result = true;
    }
    return result;
  }
 /**
  * @description Function to decrement item from the cart
  * @param article item object
  * @returns boolean true if object is deleted, false if not
  */
  minuItem(article:any){
    let result = false;
    if(article!=null || article!=undefined){
      this.cart_service.removeFromCart(article);
      result = true;
    }
    return result;
  }
  /**
  * @description Function to add a CSS effect when something is aded to the cart
  */
  applyCss(){
   let element: any = document.getElementById('lower_menu_cart');
    if(element!=null){
      element.classList.add('bounce');
      setTimeout(()=>{
       element.classList.remove("bounce");
      }, 3000);
    }
  }
  /**
  * @description Function to notify the user that their item is added to the cart
  */
  showSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Item added to cart.',
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }
}
