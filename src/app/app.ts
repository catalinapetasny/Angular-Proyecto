import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contacts } from './pages/contacts/contacts';
import { Products } from './pages/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Home, Contacts, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoNuevo');
}
