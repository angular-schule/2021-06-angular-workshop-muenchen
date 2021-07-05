import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  myText = 'Hallo Welt';

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    this.submitForm(); // TODO
  }

  submitForm() {
    this.submitBook.emit({ isbn: 'TEST' } as Book); // Type Assertion

  }

}
