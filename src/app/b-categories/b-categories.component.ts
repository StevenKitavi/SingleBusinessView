import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { Businesses } from '../mock-business';
import { BusinessService } from '../business.service'

@Component({
  selector: 'app-b-categories',
  templateUrl: './b-categories.component.html',
  styleUrls: ['./b-categories.component.css']
})

export class BCategoriesComponent implements OnInit {

  businesses : Business[];
  selectedBusiness: Business;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {

    this.getBusiness();
  }

  onSelect(business: Business): void {
    this.selectedBusiness = business;
  }

  getBusiness(): void{
    this.businessService.getBusiness()
        .subscribe(businesses => this.businesses = businesses);
  }

}
