import { Component, OnInit, Input } from '@angular/core';

import { IEmployee } from './shared/interface';
import { SharedService } from './shared/shared.service';
import { EMPLOYEES } from './mock-employees';

// import {Observable, Subject} from '@reactivex/rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './search.component.html'

})
export class SearchComponent {
  term: string;
  searchResp: any[];
  // type should be IEmployee[]

  constructor( private sharedService: SharedService ) {}

  searchTerm() {
    this.sharedService.searchTerm(this.term)
      .subscribe(resp => {
        this.searchResp = resp.artists.items;
      })
  }

}
