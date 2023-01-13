import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  all_categories_list: any = [];
  all_articles_list:any = [];

  constructor(private crud_service: CrudService, private cart_service: CartService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllArticles();
  }

  getAllCategories(){
    this.all_categories_list =  this.crud_service.getAllCategories();
  }

  getAllArticles(){
    this.all_articles_list =  this.crud_service.getAllArticles();
  }

  addToCart(article: any){
    // console.log("🚀 ~ file: product-page.component.ts:36 ~ ProductPageComponent ~ addToCart ~ article", article)
    // let test = this.cart_service.getCartSum();
    // console.log("🚀 ~ file: product-page.component.ts:37 ~ ProductPageComponent ~ addToCart ~ test", test)
    this.cart_service.putInCart(article)
  }

}
