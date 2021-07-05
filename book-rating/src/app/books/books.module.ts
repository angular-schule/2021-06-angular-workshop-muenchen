import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    BookDetailsComponent,
    BookCreateComponent,
    BookFormComponent,
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule // from '@angular/forms'
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
