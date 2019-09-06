import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Business } from './business';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class BusinessService {

    private businessesUrl = 'api/businesses';   //This is the URL to the Web API
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    };
   

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** Get Businesses from the Server  */

  getBusiness(): Observable<Business[]>{
    return this.http.get<Business[]>(this.businessesUrl)
      .pipe(
        tap(_ => this.log('fetched businesses')),
        catchError(this.handleError<Business[]>('getBusiness', []))
      );
    
  }
/** Get business by id. and return `Undefined when id not found  */

  getBusinessNo404<Data>(id: number ): Observable<Business>{
    const url = `${this.businessesUrl}/?id=${id}`;
    return this.http.get<Business[]>(url)
      .pipe(
        map(businesses => businesses[0]), //This will return a {0|1} element array
        tap(b => {
          const outcome = b ? `fetched` : `did not find`;
          this.log(`${outcome} business id=${id}`);
        }),
        catchError(this.handleError<Business>('getBusinesses id=${id}'))
      );
  }

  /** Write class to get Business by id. Will find 404 if id not found  */

  getBusinesses(id: number): Observable<Business>{
    const url = `${this.businessesUrl}/${id}`;
    return this.http.get<Business>(url).pipe(
      tap(_ => this.log('fetched business id=${id}')),
      catchError(this.handleError<Business>(`getBusinesses id=${id}`))
    ); 
  }

  /** Get Businesses whose names contain search item */

  searchBusinesses(term: string): Observable<Business[]> {
    if (!term.trim()) {
      //if not search item, return empty hero array.
      return of ([]);
    }
    return this.http.get<Business[]>(`${this.businessesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found businesses matching "${term}"`)),
      catchError(this.handleError<Business[]>('searchBusinesses', []))
    );
  }
  

  //////// Save Methods /////////

  /** POST: add a new business to the server  */


  addBusiness (business: Business): Observable<Business>{

    return this.http.post<Business>(this.businessesUrl, business, this.httpOptions).pipe(
      tap(( newBusiness: Business ) => this.log(`added bussiness w/ id=${newBusiness.id }`)),
      catchError(this.handleError<Business>('addBusiness'))
    );
  }

  /** PUT: Update the Business on the server  */

  updateBusiness (business: Business): Observable<any> {
    return this.http.put(this.businessesUrl, business, this.httpOptions).pipe(
      tap(_ => this.log(`updated business id=${business.id}`)),
      catchError(this.handleError<any>('updateBusiness'))
    );
  }

  /** Delete the business from the Server  */

  deleteBusiness (business: Business | number): Observable<Business> {
    const id = typeof business === 'number' ? business : business.id;
    const url = '${this.businessesUrl}/${id}';

    return this.http.delete<Business>(url, this.httpOptions).pipe(
      tap(_ => this.log('deleted business id=${id}')),
      catchError(this.handleError<Business>('deleteBusiness'))
    );
  }


  
   // Handle Http operation that failed
   // Let the app continue
   // @param operation - name of the operation that failed 
   //@param result - optional value to return as the observable  result 
 

   private handleError<T> (operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

      //here choose either to Save logs to a log server or log to console instead
      // Send the error to remote logging infrastrucutre 
      // this logs to console
      console.error(error); 

      // Transform the error for user consumption

      this.log(`${operation} failed: ${error.message}`);

      //Keep the App running by returning an empty result.

      return of (result as T);

     };

   }

   /** Log a BusinessService message with the MessageService  */

   private log(message: string) {
     this.messageService.add(`BusinessService: ${message}`);

   }
}
