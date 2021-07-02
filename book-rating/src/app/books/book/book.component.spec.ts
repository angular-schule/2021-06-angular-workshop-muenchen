import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Input-Property initialisieren
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 5,
      authors: []
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book | undefined;
    component.rateUp.subscribe(book => {
      // EventEmitter arbeitet synchron
      emittedBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBeTruthy(); // falsy := 0, null, undefined, '', NaN
    expect(emittedBook).toBe(component.book);
  });
});
