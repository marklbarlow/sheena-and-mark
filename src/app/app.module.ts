import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  { path: '', redirectTo: '/venue', pathMatch: 'full' },
  { path: 'venue', component: VenueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
