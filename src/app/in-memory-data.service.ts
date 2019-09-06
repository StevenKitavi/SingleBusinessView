import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Business } from './business';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService  implements InMemoryDbService{
  createDb() {
    const businesses = [

    { id: 11, name: 'Nokia'},
    { id: 12, name: 'Samsung'},
    { id: 13, name: 'Apple'},
    { id: 14, name: 'Sony'},
    { id: 15, name: 'LG'},
    { id: 16, name: 'HP'},
    { id: 17, name: 'Bose'},
    { id: 18, name: 'Bang&Olufsen'},
    { id: 19, name: 'Ramtons'},
    { id: 20, name: 'Briggs&Straton'},
    { id: 21, name: 'Philiphs'},
    { id: 22, name: 'Decker'},
    ];
    return {businesses};
  }
  genId(businesses: Business[]): number {
    return businesses.length > 0 ? Math.max(...businesses.map(business => business.id)) + 1 : 11;
  }
 
}
