import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      description: new FormControl(''),
      price: new FormControl(0, [
        Validators.min(0)
      ]),
      rating: new FormControl(1, [
        Validators.min(1),
        Validators.max(5),
      ])
    });  
  }

  ngOnInit(): void {}

  submitForm() {
    /*
    // Alternative:
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }*/

    console.log('submit');

    const book = {
      ...this.bookForm.value,
      authors: []
    };

    this.submitBook.emit(book);
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }

  hasError(controlName: string, error: string): boolean {
    const control = this.bookForm.get(controlName);
    return !!control && control.touched && control.hasError(error);    
  }

}
