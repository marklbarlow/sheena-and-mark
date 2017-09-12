import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  // { path: '', redirectTo: '/venue', pathMatch: 'full' },
  // { path: 'venue', component: VenueComponent },
  { path: '', component: VenueComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
