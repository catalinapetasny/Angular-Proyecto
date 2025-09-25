import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacts } from './pages/contacts/contacts';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'contacts', component: Contacts},
    {path: 'about', component: About},
    {path: 'products', component: Products}
];
