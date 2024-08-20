import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LegalComponent } from './pages/legal/legal.component';

export const routes: Routes = [
    { path: 'home', component: LoginComponent },
    { path: '', redirectTo : 'home', pathMatch : 'full' },
    {path: 'policity', component: LegalComponent},
    {path: 'inicio', component: DashboardComponent}
];
