import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_sum: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  private cart_items: any = [];
  sum=0;

  constructor() { }

  getCartSum(): BehaviorSubject<number>{
    return this.cart_sum;
  }

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
    if(this.cart_items.length>0){
      this.cart_items.forEach((item:any) =>this.sum = this.sum+item.price);
      this.cart_sum.next(parseFloat(this.sum.toFixed(2)));
    }
  }
}
