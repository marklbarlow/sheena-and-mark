import { Component, Directive, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[routerLink]',
})
export class RouterLinkStubDirective {
    @Input() routerLink: any;
}

// tslint:disable-next-line:component-selector
@Component({ selector: 'router-outlet', template: '' })
export class RouterOutletStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'mdb-navbar', template: '' })
export class MdbNavBarStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'agm-map', template: '' })
export class AgmMapStubComponent {
    @Input() latitude: any;
    @Input() longitude: any;
    @Input() zoom: any;
}

// tslint:disable-next-line:component-selector
@Component({ selector: 'agm-marker', template: '' })
export class AgmMarkerStubComponent {
    @Input() latitude: any;
    @Input() longitude: any;
}

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-section', template: '' })
export class SectionStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-accommodation', template: '' })
export class AccommodationStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-gift-list', template: '' })
export class GiftListStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'links', template: '' })
export class LinksStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'logo', template: '' })
export class LogoStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-sagai', template: '' })
export class SagaiStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-transport', template: '' })
export class TransportStubComponent { }

// tslint:disable-next-line:component-selector
@Component({ selector: 'sam-venue', template: '' })
export class VenueStubComponent { }
