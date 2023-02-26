import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit{

  book:Book |undefined= new Book();

  constructor(
    private bookService:BookService,
    private route:ActivatedRoute,
    private location:Location,
  ){}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params:Params) => this.bookService.getBook(+params['id']))
    ).subscribe(book => this.book = book)
  }

  goBack():void{
    this.location.back();
  }
}
