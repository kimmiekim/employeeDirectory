import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from '../employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail.component';
import { SearchComponent } from '../search.component';
import { ArtistComponent } from '../artist.component';
var APP_ROUTES = [
    { path: '', redirectTo: './employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail', component: EmployeeDetailComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id}', component: ArtistComponent }
];
export var Routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../../src/app/shared/app.routing.js.map