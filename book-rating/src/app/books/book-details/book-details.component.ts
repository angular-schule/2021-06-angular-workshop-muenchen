import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, share, shareReplay, startWith, switchMap } from 'rxjs/operators';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    /* Synchroner Weg
    const isbn = this.route.snapshot.paramMap.get('isbn');
    console.log(isbn);
    */

   this.book$ = this.route.paramMap.pipe(
     map(params => params.get('isbn') || ''),
     switchMap(isbn => this.bs.getSingle(isbn)),
     catchError(err => {
       return of({
        isbn: '111',
        title: 'Standardbuch',
        authors: [],
        description: '',
        rating: 5,
        price: 100
      })
     })
     /*startWith({
       isbn: '111',
       title: 'Standardbuch',
       authors: [],
       description: '',
       rating: 5,
       price: 100
     })*/
   );
    
    
  }

  ngOnInit(): void {
  }

}
