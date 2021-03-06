import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as stubs from 'testing';

import { VenueComponent } from './venue.component';

describe('VenueComponent', () => {
  let component: VenueComponent;
  let fixture: ComponentFixture<VenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VenueComponent,

        stubs.AgmMapStubComponent,
        stubs.AgmMarkerStubComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
