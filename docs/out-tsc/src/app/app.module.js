import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/blocks/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ContainerComponent } from './components/blocks/container/container.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from '../app/services/FirebaseService';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            LoginComponent,
            ContainerComponent,
            RegisterComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFirestoreModule
        ],
        providers: [AngularFirestore, FirebaseService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map