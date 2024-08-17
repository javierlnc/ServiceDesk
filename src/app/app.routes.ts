import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'home', component: LoginComponent },
    { path: '', redirectTo : 'LoginComponent', pathMatch : 'full' },
    {path: 'dashboard', component: DashboardComponent}
];
