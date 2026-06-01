import {Routes} from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/landing').then(m => m.LandingComponent) },
    { path: 'login', loadComponent: () => import('./pages/login').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./pages/register').then(m => m.RegisterComponent) },
    { path: 'explore', loadComponent: () => import('./pages/explore').then(m => m.ExploreComponent) },
    { path: 'post', loadComponent: () => import('./pages/post-job').then(m => m.PostJobComponent) },
    { path: 'jobs/:id', loadComponent: () => import('./pages/job-detail').then(m => m.JobDetailComponent) },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard').then(m => m.DashboardComponent) },
    { path: 'profile', loadComponent: () => import('./pages/profile').then(m => m.ProfileComponent) }
];
