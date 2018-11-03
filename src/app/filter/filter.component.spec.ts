import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import * as books from '../book-list/books.json';

import {FilterComponent} from './filter.component';
import {FormsModule} from '@angular/forms';
import {Book} from '../models/Book';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let minPagesInput: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.books = <Array>books.map(b => new Book(b));
    fixture.detectChanges();
    minPagesInput = fixture.nativeElement.querySelector('input[type="text"]');
    jasmine.addMatchers({
      toBeSortedBy(sortKey) {
        return {
          compare: function (arr) {
            let eq = true;
            for (let i = 0; i < (arr.length - 1); i++) {
              eq = eq && (arr[i][sortKey] < arr[i + 1][sortKey]);
            }
            return {
              pass: eq
            };
          }
        };
      }
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [50, 100, 150, 200, 300, 400, 1000].forEach(pagesNo => {
    it(`should filter only books with mote than ${pagesNo} pages`, (done) => {
      component.filtered.subscribe(g => {
        expect(Math.min(...g.map(b => b.pages))).toBeGreaterThan(pagesNo);
        done();
      });
      minPagesInput.value = '' + pagesNo;
      minPagesInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
    });
  });

  ['pages', 'sortReleaseDate', 'surname'].forEach(sortKey => {

    it(`should be sorted with key ${sortKey}`, (done) => {
      component.filtered.subscribe(g => {
        expect(g).toBeSortedBy(sortKey);
        done();
      });
      const input = fixture.nativeElement.querySelector(`input[value="${sortKey}"]`);
      input.checked = true;
      input.dispatchEvent(new Event('change'));
    });

  });


});
