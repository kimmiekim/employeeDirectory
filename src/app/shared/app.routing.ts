import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from '../employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: './employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
