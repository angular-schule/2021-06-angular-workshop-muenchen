import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule
  ],
  providers: [
    /*{
      provide: BookRatingService,
      useClass: environment.production ? BookRatingService : BookRatingService
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
