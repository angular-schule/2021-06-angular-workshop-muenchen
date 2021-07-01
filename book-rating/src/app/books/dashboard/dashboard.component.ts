import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        rating: 5,
        price: 36.9,
        authors: ['FM', 'DK', 'JH']
      },
      {
        isbn: '222',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        rating: 3,
        price: 32.9,
        authors: ['Evan You']
      }
    ];
  }

  ngOnInit(): void {
  }

  doRateUp(book: Book) {
    console.log('UP', book);
  }
  
  doRateDown(book: Book) {
    console.log('DOWN', book);
  }

}