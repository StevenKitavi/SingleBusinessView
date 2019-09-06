import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BCategoriesComponent } from './b-categories/b-categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService } from './in-memory-data.service';
import { BusinessSearchComponent } from './business-search/business-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BCategoriesComponent,
    CategoryDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BusinessSearchComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule modlue intercepts HTTP requests
    // and returns sumulated server responses.
    // Remove is whena real server is ready to receive requests.

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
 
  bootstrap: [AppComponent]
})




export class AppModule { }
