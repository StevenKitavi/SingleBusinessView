import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  businesses: Business[] = [];
  constructor(private businessService :  BusinessService) { }


  ngOnInit() {

    this.getBusiness();

  }

  getBusiness(): void {
    this.businessService.getBusiness()
    .subscribe(businesses => this.businesses = businesses.slice(1, 5));
  }

}
