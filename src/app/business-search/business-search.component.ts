import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Business } from '../business';
import { BusinessService } from  '../business.service';



@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.component.html',
  styleUrls: ['./business-search.component.css']
})

export class BusinessSearchComponent implements OnInit {
  businesses$: Observable<Business[]>;
  private searchTerms = new Subject<string>();

  
  constructor( private businessService: BusinessService) { }

  //Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit(): void  {
      this.businesses$ = this.searchTerms.pipe(

        // wait of 300ms after each key stroke before considering the term

        debounceTime(300),

        // Ignore the new term if it's the same as the previous term
        distinctUntilChanged(),


        switchMap (( term: string) => this.businessService.searchBusinesses(term)),

      );
  }

}
