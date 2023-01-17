import { Injectable } from '@angular/core';
import categories from '../../../backend/categories.json'
import articles from './../../../backend/articles.json'

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  /**
   * @description Variable to hold the categories read from the database
   */
  all_categories = categories;
  /**
   * @description Variable to hold the articles read from the database
   */
  all_articles = articles;

  constructor() {}

  /**
   * @description Function to READ data(categories) from the server
   * @returns array list of categories
   */
  getAllCategories(){
    return this.all_categories;
  }
  /**
   * @description Function to READ data(articles) from the server
   * @returns array list of articles
   */
  getAllArticles(){
    return this.all_articles;
  }

}
