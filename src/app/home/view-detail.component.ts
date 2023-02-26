import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  book: Book|undefined = new Book();
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['id']))
    ).subscribe(book => this.book = book)
  }

  goBack():void{
    this.location.back();
  }

  updateBook(id:number):void{
    this.router.navigate(['/update-book',id])
  }
}
