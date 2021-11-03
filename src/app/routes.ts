import { Routes } from '@angular/router'
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

export const allAppRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  
];