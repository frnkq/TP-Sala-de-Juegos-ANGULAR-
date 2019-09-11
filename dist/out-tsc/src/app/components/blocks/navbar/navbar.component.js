import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ROUTE_URL } from '../../../Constants';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.routes = ROUTE_URL;
    }
    ngOnInit() {
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map