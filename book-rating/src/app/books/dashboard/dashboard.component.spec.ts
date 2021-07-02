import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let ratingMock: BookRatingService;

  beforeEach(async () => {
    ratingMock = {
      rateUp: book => book,
      rateDown: book => book,
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        {
          provide: BookRatingService,
          useValue: ratingMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    // Change Detection muss im Tests manuell ausgeführt werden
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mock should return book', () => {
    const service = TestBed.inject(BookRatingService);
    const book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 10,
      authors: []
    };

    const result = service.rateUp(book);
    expect(result).toBe(book);
  });
});
