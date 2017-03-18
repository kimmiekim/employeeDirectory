import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(employees: any, term: any): any {
    //check if search term is undefined
    if (term === undefined) return employees;
    //return updated employees array
    return employees.filter(function(employee){
      return employee.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
