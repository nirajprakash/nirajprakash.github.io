import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ApiConstants } from '../api_constants';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    console.log(error)
    return throwError(error.error);
  }

  get(path: string, params: any = new HttpParams()): Observable<any> {
    return this.http.get(`${ApiConstants.API_URL}${path}`, { params: params, headers : this.headers })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${ApiConstants.API_URL}${path}`,
      JSON.stringify(body),
      {headers : this.headers}
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${ApiConstants.API_URL}${path}`,
      JSON.stringify(body), {headers : this.headers}
    ).pipe(catchError(this.formatErrors));
  }


  postAuthorized(path: string, token: string, body: Object = {}): Observable<any> {
    let authHeaders = new HttpHeaders().set('Content-Type', 'application/json').set("Authorization", `Bearer ${token}`);

	  return this.http.post(
      `${ApiConstants.API_URL}${path}`,
      JSON.stringify(body), {headers : authHeaders}
    ).pipe(catchError(this.formatErrors));
  }


  delete(path: string): Observable<any> {
    return this.http.delete(
      `${ApiConstants.API_URL}${path}`,
      {headers : this.headers}
    ).pipe(catchError(this.formatErrors));
  }

  doGetObservable(url: string): Observable<any> {
    console.log(url);
    return this.http.get(url, { headers : this.headers });
  }



}
