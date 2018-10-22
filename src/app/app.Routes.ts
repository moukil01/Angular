import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const ROUTES: Routes = [
{ path: '', component: UserProfilComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-profil', component: UserProfilComponent },
];

export { ROUTES };