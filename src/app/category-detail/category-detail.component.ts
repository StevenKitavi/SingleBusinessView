import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Business } from '../business';
import { BusinessService } from '../business.service';

 
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  business: Business;

  
  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.getBusinesses();
    
  }

  getBusinesses(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.businessService.getBusinesses(id)
        .subscribe(business => this.business = business);
  }
  goBack(): void {
    this.location.back();
  }
}
