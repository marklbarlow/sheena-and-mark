import { async, TestBed } from '@angular/core/testing';

import { MdbNavBarStubComponent, RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/stubs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MdbNavBarStubComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
