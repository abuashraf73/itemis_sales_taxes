import { Injectable } from '@angular/core';
import categories from '../../../backend/categories.json'
import articles from './../../../backend/articles.json'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  /**
   *
   */
  all_categories = categories;
  /**
   *
   */
  all_articles = articles;

  constructor() {}

  /**
   *
   * @returns
   */
  getAllCategories(){
    return this.all_categories;
  }
  /**
   *
   * @returns
   */
  getAllArticles(){
    return this.all_articles;
  }

}
