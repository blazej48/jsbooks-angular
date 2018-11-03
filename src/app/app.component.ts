import {Component} from '@angular/core';
import books from './book-list/books.json';
import {Book} from './models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initBooks = books.map(b => new Book(b));
}
