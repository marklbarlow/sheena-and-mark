import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  // { path: '', redirectTo: '/venue', pathMatch: 'full' },
  // { path: 'venue', component: VenueComponent },
  { path: '', component: HomeComponent },
  { path: 'countdown', component: CountdownComponent }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    VenueComponent,
    CountdownComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    MomentModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
