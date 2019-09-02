import { Injectable } from '@angular/core';
import { Business } from './business';
import { Businesses } from './mock-business';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  constructor(private messageService: MessageService) { }

  getBusiness(): Observable<Business[]>{
    // this send the message _after_ fetching the heroes

    this.messageService.add('BusinessService: fetched businesses');

    return  of (Businesses);
  }
  
}
