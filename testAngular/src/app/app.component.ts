import { Component } from '@angular/core';
import { Book } from './Book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log("initing");
    this.retreiveBooks();
    
  }

  retreiveBooks() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    })
  }

  createBook() {
    var book = new Book;
    book.name = "book5";
    book.price = 50.5;
    this.bookService.addBook(book).subscribe((book) => {
      this.retreiveBooks();
    })
  }
}
