import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    title: 'Acessar',
    component: LoginComponent,
  },
  {
    path: 'signup',
    title: 'Registrar-se',
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
