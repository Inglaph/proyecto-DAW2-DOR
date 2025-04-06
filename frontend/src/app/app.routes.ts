import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'services',
        loadComponent: () =>
            import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'applications',
        loadComponent: () =>
            import('./pages/applications/applications.component').then(m => m.ApplicationsComponent)
    },
    {
        path: 'store',
        loadComponent: () =>
            import('./pages/store/store.component').then(m => m.StoreComponent)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
