import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { EMPLOYEES } from '../mock-employees';
import { EmployeeListComponent } from '../employee-list.component';
import { IEmployee } from './interface';

@Injectable()
export class SharedService {
  private _url = 'app/shared/data.json';
  constructor(private _http: Http) { }

  getEmployees(): Observable<IEmployee[]>{
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .do(data => console.log("JSON: " + JSON.stringify(data)))
  }

}
