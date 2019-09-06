import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service'

@Component({
  selector: 'app-b-categories',
  templateUrl: './b-categories.component.html',
  styleUrls: ['./b-categories.component.css']
})

export class BCategoriesComponent implements OnInit {

  businesses : Business[];
  

  constructor(private businessService: BusinessService) { }

  ngOnInit() {

    this.getBusiness();
  }

  

  getBusiness(): void{
    this.businessService.getBusiness()
        .subscribe(businesses => this.businesses = businesses);
  }

  add(name: string) : void{
    name = name.trim();
    if (!name) { return; }
    this.businessService.addBusiness({ name } as Business
    )
    .subscribe(business => {
      this.businesses.push(business);
    });
  }

  delete(business: Business): void{
    this.businesses = this.businesses.filter(b => b ! == business);
    this.businessService.deleteBusiness(business).subscribe();
  }

}
