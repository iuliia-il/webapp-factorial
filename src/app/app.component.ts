import {Component, OnInit} from '@angular/core';
import { RestService } from "./rest.service";
import {HttpErrorResponse} from "@angular/common/http";
import { MatSnackBar } from '@angular/material/snack-bar';
import {Observable} from "rxjs";
import {Result} from "./result.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  number : string;
  result: Result;

  constructor(private restService : RestService) {
  }

  ngOnInit() {
  }

  onNumberSubmitted(number: string) {
    this.number = number;
    this.restService.factorial(number).subscribe(
      data => {
        console.log(data);
        this.result = data;
      }),
      error => console.log(error);
  }

}
