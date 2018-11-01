import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/Book';
import {sortBy} from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  sort: string;
  minPages: string;
  @Input() books: Book[];
  @Output() filtered = new EventEmitter<Book[]>();

  constructor() {
  }

  ngOnInit() {
    this.sort = localStorage.getItem('sort');
    this.minPages = localStorage.getItem('minPages');
    this.filter();
  }

  public clean() {
    this.sort = null;
    this.minPages = null;
    localStorage.clear();
    this.filter();
  }

  public filter() {
    this.filtered.emit(
      sortBy(this.books.filter(b => !this.minPages || b.pages > +this.minPages), this.sort)
    );
  }

  public changeFilterOptions() {
    localStorage.setItem('sort', this.sort);
    localStorage.setItem('minPages', this.minPages ? this.minPages : '');
    this.filter();
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(e: KeyboardEvent) {
    if (e.altKey && e.code === 'KeyR') {
      this.clean();
    }
  }


}
