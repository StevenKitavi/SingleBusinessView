import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Business } from './business';
import { Businesses } from './mock-business';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  constructor(private messageService: MessageService) { }

  getBusiness(): Observable<Business[]>{
    //This will send message after fetching the businesses
    this.messageService.add(`BusinessService : fetched businesses`);
    return of (Businesses);
  }

  getBusinesses(id: number): Observable<Business[]>{
    // this send the message _after_ fetching the business
    this.messageService.add(`BusinessService: fetched businesses id = ${id}`);
    return  of ( Businesses.find (business => business.id === id ));
  }
  
}
