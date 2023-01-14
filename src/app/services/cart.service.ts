import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   *
   */
  public cart_sum: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  /**
   * 
   */
  public cart_items: any = [];

  constructor(private router: Router) { }
  /***
   *
   */
  getCartSum(): BehaviorSubject<number>{
    return this.cart_sum;
  }
  /**
   *
   * @param article
   */
  putInCart(article: any){
    if(this.cart_items.length==0){
      article.quantity=1;
      this.cart_items.push(article)
    }else{
      let result = this.cart_items.filter((item: any)=>item.id===article.id)
      if(result.length>0){
        result[0].quantity = result[0].quantity+1;
      }else{
        article.quantity=1;
        this.cart_items.push(article)
      }
    }
    this.cart_sum.next(this.calculateCartPrice(this.cart_items));
    if(this.cart_items.length>0){}
    this.checkIfItemInCart(article);
    localStorage.removeItem('cart_items')
    localStorage.setItem('cart_items', JSON.stringify(this.cart_items))
  }
 /**
  *
  * @param array
  * @returns
  */
  calculateCartPrice(array:any){
    let sum = 0;
    array.forEach((item:any) =>sum = sum + item.price*item.quantity);
    return parseFloat(sum.toFixed(2));
  }
/**
 *
 * @param article
 * @returns
 */
  checkIfItemInCart(article:any){
    let result:any = this.cart_items.filter((item:any)=>item.id===article.id);
    if(result.length>0){
      return result[0].id;
    }
  }
  /**
   *
   * @param article
   * @returns
   */
  giveItemQuantity(article:any){
    let result:any = this.cart_items.filter((item:any)=>item.id===article.id);
    if(result.length>0){
      return result[0].quantity;
    }
  }
  /**
   *
   * @param article
   */
  removeFromCart(article:any){
    if(article!=undefined && article.quantity!=undefined){
      if(article.quantity==1){
        this.cart_items.forEach( (item:any, index:any) => {
          if(item === article) this.cart_items.splice(index,1);
        });
      }else{
        article.quantity--;
      }
    }
    this.cart_sum.next(this.calculateCartPrice(this.cart_items))
  }
/**
 *
 */
  emptyCart(){
    this.cart_items = [];
    this.cart_sum.next(0);
    this.router.navigate(['/products']);
    localStorage.removeItem('cart_items')
  }
}
