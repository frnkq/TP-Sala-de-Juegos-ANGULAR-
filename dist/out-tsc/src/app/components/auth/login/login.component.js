import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../../../models/User';
import { FirebaseService } from '../../../services/FirebaseService';
import { ROUTE_URL } from '../../../Constants';
let LoginComponent = class LoginComponent {
    constructor(router, firestore, firebase) {
        this.router = router;
        this.firestore = firestore;
        this.routes = ROUTE_URL;
        this.firebase = new FirebaseService(firestore);
    }
    ngOnInit() {
    }
    LogIn() {
        if (User.LogIn(this.usernameInput, this.passwordInput) != null) {
            this.router.navigateByUrl("/");
            localStorage.setItem("user", this.usernameInput);
        }
        else {
            localStorage.setItem("user", null);
            this.router.navigateByUrl("/");
        }
    }
    CreateUser() {
        return this.firebase.CreateUser(this.usernameInput, this.passwordInput);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map