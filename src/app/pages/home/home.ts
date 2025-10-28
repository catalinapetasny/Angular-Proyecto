import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Autores } from '../../models/autores';
import { Destacados } from '../../models/destacados';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoAutor: Autores[];
  public infoTarjeta2: Destacados[];

  constructor() {

    /* Info Autores */
    
    this.infoAutor = [
      {
        id: "1G",
        img: "../../../assets/stephenKing.jfif",
        alt: "Autor",
        nombre: "Stephen King",
        libros: "It, Cementerio de Animales, El Resplandor, entre otros."
      },

      {
        id: "2E",
        img: "../../../assets/mary.jfif",
        alt: "Autora",
        nombre: "Mary Shelley",
        libros: "Frankenstein o el moderno Prometeo, Mathilda, entre otras."
      },

      {
        id: "3N",
        img: "../../../assets/Alighieri.jfif",
        alt: "Autor",
        nombre: "Dante Alighieri",
        libros: "Infierno, Purgatorio, Divina Comedia, entre otras."
      }, 

      {
        id: "4A",
        img: "../../../assets/shirley.jpg",
        alt: "Autora",
        nombre: "Shirley Jackson",
        libros: "La Lotería, La Maldición de Hill House, entre otras"
      }
    ]

    /* Info tarjetas destacadas */

    this.infoTarjeta2 = [
      {
        id: 4,
        img: "../../../assets/it.jfif",
        alt: "It de Stephen King",
        precio: 15000,
        tituloLibro: "It",
        autor: "Stephen King"
      },

      {
        id: 5,
        img: "../../../assets/cementerioDeAnimales.jfif",
        alt: "Cementerio de Animales de Stephen King",
        precio: 15000,
        tituloLibro: "Cementerio de Animales",
        autor: "Stephen King"
      },

      {
        id: 6,
        img: "../../../assets/elResplandor.jfif",
        alt: "El Resplandor de Stephen King",
        precio: 15000,
        tituloLibro: "El Resplandor",
        autor: "Stephen King"
      },

      {
        id: "7C",
        img: "../../../assets/dante.jfif",
        alt: "The Inferno of Dante Alighieri",
        precio: 15000,
        tituloLibro: "The Inferno of Dante A.",
        autor: "Dante Alighieri"
      },

      {
        id: "8A",
        img: "../../../assets/frankeinstein.jfif",
        alt: "Frankenstein o el moderno Prometeo de Mary Shelley",
        precio: 15000,
        tituloLibro: "Frankenstein ",
        autor: "Mary Shelley"
      },

      {
        id: "9T",
        img: "../../../assets/maldicion.jpg",
        alt: "La Maldición de Hill House de Shirley Jackson",
        precio: 15000,
        tituloLibro: "La Maldición de Hill House",
        autor: "Shirley Jackson"
      },

      {
        id: "10A",
        img: "../../../assets/elExorcista.png",
        alt: "El Exorcista de William Peter Blatty",
        precio: 15000,
        tituloLibro: "El Exorcista",
        autor: "William Peter Blatty"
      },

      {
        id: "11E",
        img: "../../../assets/carrie.jpg",
        alt: "Carrie de Stephen King",
        precio: 15000,
        tituloLibro: "Carrie",
        autor: "Stephen King"
      },
    ]
  }

  seleccionarTarjeta: any = null;

  verInfo(card: any) {
    this.seleccionarTarjeta = card;

  }
}
