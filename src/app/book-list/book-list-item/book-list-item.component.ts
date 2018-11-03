import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/Book';
import {ModalService} from '../../modal.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;
  @Input() number: number;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

  openModal() {
    this.modalService.openImg(this.book.cover.large);
  }

}
