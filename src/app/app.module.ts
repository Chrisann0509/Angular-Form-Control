import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { UpdateBookComponent } from './manage-book/update-book.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
