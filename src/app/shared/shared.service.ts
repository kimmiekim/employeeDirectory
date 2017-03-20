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
  constructor(private _http: Http) { }
  private url: string;
  private artistUrl: string;

  searchTerm(searchString: string, type="artist") {
    this.url = "https://api.spotify.com/v1/search?query="+searchString+"&offset=0&limit=20&type="+type+"&market=US";
    // private _url = 'app/shared/data.json';
    return this._http.get(this.url)
      .map(resp => resp.json())

  }

  getArtist(id:string) {
    this.artistUrl = "https://api.spotify.com/v1/artists/"+id;
    // private _url = 'app/shared/data.json';
    return this._http.get(this.artistUrl)
      .map(resp => resp.json())

  }


}
