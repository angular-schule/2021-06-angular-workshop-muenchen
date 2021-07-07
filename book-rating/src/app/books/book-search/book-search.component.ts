import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  books$: Observable<Book[]>;
  loading = false;

  constructor(private bs: BookStoreService) {
    this.books$ = this.searchControl.valueChanges.pipe(
      filter((term: string) => term.length >= 3 || term.length === 0),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.loading = false),
    );

    /**
     * Typeahead-Suche
     * - Suchbegriff mindestens 3 Zeichen lang
     * - erst abschicken, wenn Nutzer für bestimmte Zeit die Finger still hält
     * - niemals zwei gelichen Suchbegriffe nacheinander suchen
     * - Suchbegriffe per HTTP abschicken: this.bs.search(term)
     * - Ergebnisse anzeigen (ganz simpel!), AsyncPipe
     * - Zusatz: Ladeindikator anzeigen
     */
  }

  ngOnInit(): void {
  }

}
