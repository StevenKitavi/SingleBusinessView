import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { Businesses } from '../mock-business';

@Component({
  selector: 'app-b-categories',
  templateUrl: './b-categories.component.html',
  styleUrls: ['./b-categories.component.css']
})
export class BCategoriesComponent implements OnInit {

  businesses = Businesses;
  selectedBusiness: Business;

  constructor() { }

  ngOnInit() {
  }

  onSelect(business: Business): void{
    this.selectedBusiness = business;
  }

}
