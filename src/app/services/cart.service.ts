import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   * @description Variable to store cart total price
   */
  public cart_sum: number = 0;
  /**
   * @description Array to hold all the items user has put in the cart
   */
  public cart_items: any = [];
  /**
   * @description Variable to hold the sales tax which will be added to the cart during checkout
   */
  public sales_tax:number = 0;
  /**
   * @description Variable to represent the sales tax
   */
  basic_sales_tax_percent = 10;
  /**
   * @description Variable to represent the import tax
   */
  import_tax_percent = 5;

  constructor(private router: Router) { }
  /**
   * @description Function to add item in the carts list
   * @param article item object
   * @return true/false based on success or failure
   */
  putInCart(article: any){
    let result = false;
    if(article!=null){
      if(this.cart_items.length==0){
        article.quantity=1;
        this.cart_items.push(article);
        result = true;
      }else{
        let result = this.cart_items.filter((item: any)=>item.id===article.id)
        if(result.length>0){
          result[0].quantity = result[0].quantity+1;
        }else{
          article.quantity=1;
          this.cart_items.push(article)
        }
        result = true;
      }
      this.cart_sum = this.calculateCartPrice(this.cart_items);
      if(this.cart_items.length>0){}
      this.checkIfItemInCart(article);
      localStorage.removeItem('cart_items')
      localStorage.setItem('cart_items', JSON.stringify(this.cart_items))
    }
    return result;
  }
 /**
  * @description Function to add the item's price from the cart array and give a summation
  * @param array list of items added in the cart
  * @returns sum value
  */
  calculateCartPrice(array:any){
    let sum: number = 0;
    let final_tax: number = 0;
    if(array!=null || array!=undefined){
      array.forEach((item:any) =>{
        let import_tax = 0;
        let sales_tax = 0;
        // calculating import tax
        if(item!=undefined && item.imported==true){
          import_tax = (this.import_tax_percent*(item.price*item.quantity))/100;
        }
        // calculating sales tax
        if(item!=undefined && (item.category_id=="cat_1" || item.category_id=="cat_2" || item.category_id=="cat_3")){

        }else{
          sales_tax = (this.basic_sales_tax_percent*(item.price*item.quantity))/100;
        }
        sum = sum + (item.price*item.quantity);
        final_tax = import_tax + sales_tax + final_tax;
      });
    }
    this.sales_tax = (Math.ceil(final_tax*20)/20)
    return parseFloat(sum.toFixed(2)+this.sales_tax);
  }
/**
 * @description Function to check if the item already exists in the cart or not
 * @param article item object
 * @returns id of the item
 */
  checkIfItemInCart(article:any){
    let result:any = this.cart_items.filter((item:any)=>item.id===article.id);
    if(result.length>0){
      return result[0].id;
    }
  }
  /**
   * @description Function to check if the item already exists in the cart or not
   * @param article item object
   * @returns quantity of the item
   */
  giveItemQuantity(article:any){
    let result:any = this.cart_items.filter((item:any)=>item.id===article.id);
    if(result.length>0){
      return result[0].quantity;
    }
  }
  /**
   * @description Function to remove item from the cart and recalculate the sum
   * @param article item object
   */
  removeFromCart(article:any){
    if(article!=undefined && article.quantity!=undefined){
      if(article.quantity==1){
        this.cart_items.forEach( (item:any, index:any) => {
          if(item === article) this.cart_items.splice(index,1);
        });
        if(this.cart_items.length==0){  this.router.navigateByUrl('/');}
      }else{
        article.quantity--;
      }
    }
    this.cart_sum = (this.calculateCartPrice(this.cart_items))
  }
  /**
   * @description Function to empty the cart, make the sum to zero and remove the cache saved in the browser
   */
  emptyCart(){
    this.cart_items = [];
    this.cart_sum = 0;
    this.router.navigate(['/products']);
    localStorage.removeItem('cart_items')
  }
}
