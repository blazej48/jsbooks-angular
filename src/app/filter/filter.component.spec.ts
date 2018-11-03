import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as books from '../book-list/books.json';

import { FilterComponent } from './filter.component';
import {FormsModule} from '@angular/forms';
import {Book} from '../models/Book';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.books = <Array>books.map(b => new Book(b));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
