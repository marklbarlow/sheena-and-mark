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
