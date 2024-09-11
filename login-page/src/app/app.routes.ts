import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// Define your routes
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

// Export the routes
export { routes };
