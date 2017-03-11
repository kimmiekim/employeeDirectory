import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';

import { SharedService } from './shared/shared.service';
import { FilterPipe } from './filter.pipe';
import { EmployeeDetailComponent } from './employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FilterPipe,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [ SharedService, FilterPipe ],
  bootstrap: [AppComponent],


})
export class AppModule { }
