import { NgModule } from '@angular/core';

import * as root from './stubs';

const DECLARATIONS = [
    root.MdbNavBarStubComponent,
    root.RouterLinkStubDirective,
    root.RouterOutletStubComponent,
    root.AccommodationStubComponent,
    root.AgmMapStubComponent,
    root.AgmMarkerStubComponent,
    root.GiftListStubComponent,
    root.LinksStubComponent,
    root.LogoStubComponent,
    root.SagaiStubComponent,
    root.SectionStubComponent,
    root.TransportStubComponent,
    root.VenueStubComponent,
];

@NgModule({
    declarations: [DECLARATIONS],
    exports: [DECLARATIONS],
})
export class TestingModule { }
