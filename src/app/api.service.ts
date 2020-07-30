import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Result} from "./result.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(number: string): Observable<Result> {
    console.log(" number : " + number);
    return this.http.get<Result>(`${environment.api_url}/${number}`, httpOptions);
  }

}
