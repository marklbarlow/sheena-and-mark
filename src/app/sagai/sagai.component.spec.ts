import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as stubs from 'testing';

import { SagaiComponent } from './sagai.component';

describe('SagaiComponent', () => {
  let component: SagaiComponent;
  let fixture: ComponentFixture<SagaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SagaiComponent,

        stubs.AgmMapStubComponent,
        stubs.AgmMarkerStubComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
