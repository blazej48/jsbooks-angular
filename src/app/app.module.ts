import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FilterComponent} from './filter/filter.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list/book-list-item/book-list-item.component';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    BookListComponent,
    BookListItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
