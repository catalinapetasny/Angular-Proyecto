import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autores } from '../../models/autores';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoAutor: Autores[];

  constructor() {
    this.infoAutor = [
      {
        id: "1G",
        img: "../../../assets/stephen.jfif",
        alt: "Autor",
        nombre: "Stephen King",
        libros: "It, Cementerio de Animales, El Resplandor, entre otros."
      },

      {
        id: "2E",
        img: "../../../assets/mary.jfif",
        alt: "Autora",
        nombre: "Mary Shelley",
        libros: "Frankenstein o el moderno Prometeo, El Último Hombre, Mathilda, entre otras."
      },

      {
        id: "2N",
        img: "../../../assets/Alighieri.jfif",
        alt: "Autor",
        nombre: "Dante Alighieri",
        libros: "Infierno, Purgatorio, Divina Comedia, entre otras."
      }
    ]
  }
}
