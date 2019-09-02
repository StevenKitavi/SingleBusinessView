import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../business'
 
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  @Input() business: Business;  

  
  constructor() { }

  ngOnInit() {
  }

}
