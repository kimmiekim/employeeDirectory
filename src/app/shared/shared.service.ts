import { Injectable } from '@angular/core';

import { EMPLOYEES } from '../mock-employees';
import { EmployeeComponent } from '../employee.component';
import { IEmployee } from './interface';

@Injectable()
export class SharedService {
    getEmployees(): IEmployee[] {
      return EMPLOYEES;
    }

  constructor() { }

}
