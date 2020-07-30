import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import {Observable} from "rxjs";
import {Result} from "./result.model";

@Injectable()
export class RestService {

  constructor(private apiService: ApiService) { }

  factorial(number: string): Observable<Result> {
    return this.apiService.get(number);
  }
}
