import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitBook = new EventEmitter<Book>();

  constructor() {
    // Formular-Modell
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0),
      rating: new FormControl(1)
    });
  }

  ngOnInit(): void {
    this.submitForm(); // TODO
  }

  submitForm() {
    this.submitBook.emit({ isbn: 'TEST' } as Book); // Type Assertion

  }

}
