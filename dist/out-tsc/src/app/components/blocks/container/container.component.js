import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContainerComponent = class ContainerComponent {
    constructor() {
        this._isLoggedIn = false;
    }
    get isLoggedIn() {
        if (localStorage.getItem("user") == null) {
            this._isLoggedIn = false;
        }
        else {
            this._isLoggedIn = true;
        }
        return this._isLoggedIn;
    }
    get username() {
        if (this.isLoggedIn)
            return localStorage.getItem("user");
    }
    ngOnInit() {
    }
};
ContainerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-container',
        templateUrl: './container.component.html',
        styleUrls: ['./container.component.css']
    })
], ContainerComponent);
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map