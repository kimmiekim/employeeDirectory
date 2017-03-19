import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { SearchComponent } from './search.component';
import { ArtistComponent } from './artist.component';

import { SharedService } from './shared/shared.service';
import { FilterPipe } from './filter.pipe';
import { Routing } from './shared/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FilterPipe,
    EmployeeDetailComponent,
    SearchComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [ SharedService, FilterPipe ],
  bootstrap: [AppComponent],


})
export class AppModule { }
