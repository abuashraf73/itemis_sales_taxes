import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /**
   *
   */
  public cart_sum: number = 0;
  /**
   *
   */
  public cart_items: any = [];
  /**
   *
   */
  public sales_tax:number = 0;
  /**
   *
   */
  basic_sales_tax_percent = 10;
  /**
   *
   */
  import_tax_percent = 5;

  constructor(private router: Router) { }
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
    this.cart_sum = this.calculateCartPrice(this.cart_items);
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
    let sum: number = 0;
    let final_tax: number = 0;
    array.forEach((item:any) =>{
      let import_tax = 0;
      let sales_tax = 0;
      // calculating import tax
      if(item!=undefined && item.imported==true){
        import_tax = (this.import_tax_percent*(item.price*item.quantity))/100;
        // item.price = item.price + import_tax;
      }
      // calculating sales tax
      if(item!=undefined && (item.category_id=="cat_1" || item.category_id=="cat_2" || item.category_id=="cat_3")){

      }else{
        sales_tax = (this.basic_sales_tax_percent*(item.price*item.quantity))/100;
        // item.price = item.price + sales_tax;
      }
      sum = sum + (item.price*item.quantity);
      final_tax = import_tax + sales_tax + final_tax;
    });
    this.sales_tax = (Math.ceil(final_tax*20)/20)
    return parseFloat(sum.toFixed(2)+this.sales_tax);
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
        if(this.cart_items.length==0){  this.router.navigateByUrl('/');}
      }else{
        article.quantity--;
      }
    }
    this.cart_sum = (this.calculateCartPrice(this.cart_items))
  }
  /**
   *
   */
  emptyCart(){
    this.cart_items = [];
    this.cart_sum = 0;
    this.router.navigate(['/products']);
    localStorage.removeItem('cart_items')
  }



}
