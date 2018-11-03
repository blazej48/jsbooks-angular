import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FilterComponent} from './filter/filter.component';
import {BookListComponent} from './book-list/book-list.component';
import {FormsModule} from '@angular/forms';
import {BookListItemComponent} from './book-list/book-list-item/book-list-item.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, FilterComponent, BookListComponent, BookListItemComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
