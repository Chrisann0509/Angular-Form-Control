import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  books:Book[] | undefined;

  constructor(private bookService:BookService){}

  getBooks():void{
    this.bookService.getBooks().then(books=> this.books=books);
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
