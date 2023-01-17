import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Categories shouldnt be empty', () => {
    let categories = service.getAllCategories();
    expect(categories).toBeTruthy()
  });

  it('Articles shouldnt be empty', () => {
    let articles = service.getAllArticles();
    expect(articles).toBeTruthy()
  });
});
