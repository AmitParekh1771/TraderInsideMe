import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadRequestError } from '../bad-request-error';
import { NotFoundError } from '../not-found-error';
import { AppError } from '../app-error';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  
  private url:string = environment.apiURL;


  getAuthors() {
    return this.http.get(`${this.url}/authors/`)
      .pipe(retry(3), catchError(this.handleErrors));
  }

  getAuthor(id: string) {
    return this.http.get(`${this.url}/authors/${id}/`)
      .pipe(retry(3), catchError(this.handleErrors));
  }

  private handleErrors(err: Response) {
    if(err.status === 400) 
      return throwError(new BadRequestError(err));
    else if(err.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(err));
  }

}
