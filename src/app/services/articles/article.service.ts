
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../app-error';
import { BadRequestError } from '../bad-request-error';
import { NotFoundError } from '../not-found-error';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private url:string = environment.apiURL;


  getBlogs() {
    return this.http.get(`${this.url}/blogs/`)
      .pipe(retry(3), catchError(this.handleErrors));
  }

  getBlog(route: string) {
    return this.http.get(`${this.url}/blogs/${route}/`)
      .pipe(retry(3), catchError(this.handleErrors));
  }

  getComments(blogId:string) {
    return this.http.get(`${this.url}/comments/${blogId}/`)
      .pipe(retry(3), catchError(this.handleErrors));
  }

  postComments(body: any) {
    return this.http.post(`${this.url}/comments/`, body)
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
