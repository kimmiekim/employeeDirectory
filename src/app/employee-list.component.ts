import { Component, OnInit, Input } from '@angular/core';

import { IEmployee } from './shared/interface';
import { SharedService } from './shared/shared.service';
import { EMPLOYEES } from './mock-employees';
import { FilterPipe } from './filter.pipe';

// import {Observable, Subject} from '@reactivex/rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styles: ['./employee-list.component.css'],

})
export class EmployeeListComponent implements OnInit {
  //defining term so it could be used within EmployeeListComponent
  @Input('search-term')
  public term: string = null;

  employees: IEmployee[] = [
    {"name":"erin", "city": "Barcelona"},
    {"name": "Lawren", "city": "Milan"},
    {"name": "Jenny", "city": "Toronto"}
  ];

  constructor( private sharedService: SharedService ) { }

  ngOnInit(): void{

  }

}
