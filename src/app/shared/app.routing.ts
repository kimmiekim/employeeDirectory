import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from '../employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail.component';
import { SearchComponent } from '../search.component';
import { ArtistComponent } from '../artist.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: './employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id}', component: ArtistComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
