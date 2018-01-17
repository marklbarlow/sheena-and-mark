import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MomentModule } from 'angular2-moment';

import { AccommodationComponent } from './accommodation/accommodation.component';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { SagaiComponent } from './sagai/sagai.component';
import { SectionComponent } from './section/section.component';
import { TransportComponent } from './transport/transport.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    VenueComponent,
    CountdownComponent,
    SectionComponent,
    TransportComponent,
    AccommodationComponent,
    SagaiComponent,
    GiftListComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2QZSULp0gtwjkXijqYtQl0gfhODD2Cnw',
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    MomentModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
