import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit{
  books:Book[] | undefined;
  book:Book =new Book();
  constructor(
    private router:Router,
    private bookService:BookService
  ){}

  getBooks():void{
    this.bookService.getBooks().then(books => this.books=books);
  }

  ngOnInit(): void {
    //retrieve all book onInit
    this.getBooks();
  }

  addBook():void{
    this.bookService.addBook(this.book);
    this.router.navigate(['/home']);
  }


}
