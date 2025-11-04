import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacts } from './pages/contacts/contacts';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { Music } from './pages/music/music';
import { NewProducts } from './new-products/new-products';

export const routes: Routes = [
    {
        /* Definimos ruta general o raíz en específico
        que nos lleve a la ruta Home*/
        path : "", component : Home

    },
    {
        path: 'home', component: Home
    },
    {
        path: 'contacts', component: Contacts
    },
    {
        path: 'about', component: About
    },
    {
        path: 'products', component: Products
    },
    {
        path: 'music', component: Music
    },
    {
        path: 'new-products', component: NewProducts
    }
];
