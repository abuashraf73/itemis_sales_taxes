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

  constructor(private crud_service: CrudService, public cart_service: CartService) { }

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
    this.cart_service.putInCart(article)
  }

  addItem(article:any){
    this.cart_service.putInCart(article)
  }

  minuItem(article:any){
    this.cart_service.removeFromCart(article)
  }

}
