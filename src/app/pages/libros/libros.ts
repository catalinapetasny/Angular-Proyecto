import { Component } from '@angular/core';
import { Destacados } from '../../models/destacados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  imports: [CommonModule],
  templateUrl: './libros.html',
  styleUrl: './libros.css'
})
export class Libros {
  public infoTarjeta2: Destacados[];

  constructor() {
    this.infoTarjeta2 = [

      {
        id: 1,
        img: "../../../assets/laLargaMarcha.jfif",
        alt: "La Larga Marcha de Stephen King",
        precio: 19990,
        tituloLibro: "La Larga Marcha",
        autor: "Stephen King"
      },

      {
        id: 2,
        img: "../../../assets/elInstituto.jfif",
        alt: "El Instituto de Stephen King",
        precio: 24990,
        tituloLibro: "El Instituto",
        autor: "Stephen King"
      },

      {
        id: 3,
        img: "../../../assets/elVisitante.jfif",
        alt: "El Visitante de Stephen King",
        precio: 22990,
        tituloLibro: "El Visitante",
        autor: "Stephen King"
      },

      {
        id: 4,
        img: "../../../assets/theStand.jfif",
        alt: "The Stand de Stephen King",
        precio: 27990,
        tituloLibro: "The Stand",
        autor: "Stephen King"
      },

      {
        id: 4,
        img: "../../../assets/it.jfif",
        alt: "It de Stephen King",
        precio: 59699,
        tituloLibro: "It",
        autor: "Stephen King"
      },

      {
        id: 5,
        img: "../../../assets/cementerioDeAnimales.jfif",
        alt: "Cementerio de Animales de Stephen King",
        precio: 43599,
        tituloLibro: "Cementerio de Animales",
        autor: "Stephen King"
      },

      {
        id: 6,
        img: "../../../assets/elResplandor.jfif",
        alt: "El Resplandor de Stephen King",
        precio: 24528,
        tituloLibro: "El Resplandor",
        autor: "Stephen King"
      },

      {
        id: 7,
        img: "../../../assets/dante.jfif",
        alt: "The Inferno of Dante Alighieri",
        precio: 133990,
        tituloLibro: "The Inferno of Dante A.",
        autor: "Dante Alighieri"
      },

      {
        id: 8,
        img: "../../../assets/frankeinstein.jfif",
        alt: "Frankenstein o el moderno Prometeo de Mary Shelley",
        precio: 18857,
        tituloLibro: "Frankenstein ",
        autor: "Mary Shelley"
      },

      {
        id: 9,
        img: "../../../assets/descarga.jpeg",
        alt: "El Corazón Delator de Edgar Allan Poe",
        precio: 38000,
        tituloLibro: "El Corazón Delator",
        autor: "Edgar Allan Poe"
      },

      {
        id: 10,
        img: "../../../assets/elExorcista.png",
        alt: "El Exorcista de William Peter Blatty",
        precio: 33600,
        tituloLibro: "El Exorcista",
        autor: "William Peter Blatty"
      },

      {
        id: 11,
        img: "../../../assets/carrie.jpg",
        alt: "Carrie de Stephen King",
        precio: 43345,
        tituloLibro: "Carrie",
        autor: "Stephen King"
      },
    ]
  }
}
