import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadComponent:()=> import('./pages/home/home.component').then((m)=> m.HomeComponent),
            },
            {
                path:'home',
                loadComponent:()=> import('./pages/home/home.component').then((m)=> m.HomeComponent),
            },
            {
                path:'blog',
                loadComponent:()=> import('./pages/blog/blog.component').then((m)=> m.BlogComponent),
            },
            {
                path:'contactus',
                loadComponent:()=> import('./pages/contactus/contactus.component').then((m)=> m.ContactusComponent),
            }
        ]
    }
];
