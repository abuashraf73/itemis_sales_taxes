import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get all categories list', ()=>{
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    let categories: any = app.getAllCategories();
    expect(categories).toBeTruthy();
  })

  it('Should get all articles list', ()=>{
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    let articles: any = app.getAllArticles();
    expect(articles).toBeTruthy();
  })

  it('Should add item in the cart', ()=>{
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    let test_object = {
      "id": "art_4",
      "name": "CK Perfume",
      "category_id": "cat_4",
      "category_name": "fragrance",
      "price": 47.5,
      "imported": true,
      "img": "",
      "quantity": 1
  }
    let articles: any = app.addToCart(test_object);
    expect(articles).toBe(true);
  })

  it('Should increment item in the cart', ()=>{
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    let test_object = {
      "id": "art_4",
      "name": "CK Perfume",
      "category_id": "cat_4",
      "category_name": "fragrance",
      "price": 47.5,
      "imported": true,
      "img": "",
      "quantity": 1
  }
    let articles: any = app.addItem(test_object);
    expect(articles).toBe(true);
  })

  it('Should decrement item in the cart', ()=>{
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    let test_object = {
      "id": "art_4",
      "name": "CK Perfume",
      "category_id": "cat_4",
      "category_name": "fragrance",
      "price": 47.5,
      "imported": true,
      "img": "",
      "quantity": 1
  }
    let articles: any = app.minuItem(test_object);
    expect(articles).toBe(true);
  })
});
