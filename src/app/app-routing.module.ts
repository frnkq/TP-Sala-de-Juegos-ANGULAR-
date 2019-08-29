import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './components/blocks/container/container.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'auth', children: [
    { path : '' , redirectTo: '/', pathMatch: 'full' }, 
    { path:  'login', component: LoginComponent },
    { path:  'register', component: RegisterComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
