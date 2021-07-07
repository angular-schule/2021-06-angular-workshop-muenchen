import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';
  private api2 = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api + '/books').pipe(
      retry(5)
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.api + '/books/' + isbn);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.api + '/books', book);
  }

  search(term: string): Observable<Book[]> {
    if (!term) {
      return of([]);
    }
    return this.http.get<Book[]>(this.api + '/books/search/' + term);
  }


}
