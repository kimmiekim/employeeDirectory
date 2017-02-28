import { Component, OnInit } from '@angular/core';

import { IEmployee } from './shared/interface';
import { SharedService } from './shared/shared.service';
import { EMPLOYEES } from './mock-employees';

// import {Observable, Subject} from '@reactivex/rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  employees: IEmployee[];

  constructor( private sharedService: SharedService ) { }

  ngOnInit(): void{
    // this.getEmployees();

    // this.sharedService.getEmployees()
    //     .subscribe((data: IEmployee[]) => this.employees = data)
  }

}
