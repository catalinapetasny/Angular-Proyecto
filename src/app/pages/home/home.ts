import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artistas, Autores } from '../../models/autores';
import { Destacados, Musica } from '../../models/destacados';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoAutor: Autores[];
  public infoTarjeta2: Destacados[];
  public infoArtista: Artistas[];
  public infoMusica: Musica[];

  constructor() {

    /* Info de Autores */

    this.infoAutor = [
      {
        id: 1,
        img: "../../../assets/stephenKing.jfif",
        alt: "Autor",
        nombre: "Stephen King",
        libros: "It, Cementerio de Animales, El Resplandor, entre otras."
      },

      {
        id: 2,
        img: "../../../assets/edgar.jpg",
        alt: "Autor",
        nombre: "Edgar Allan Poe",
        libros: "El cuervo, El corazón delator entre otras."
      },

      {
        id: 3,
        img: "../../../assets/Alighieri.jfif",
        alt: "Autor",
        nombre: "Dante Alighieri",
        libros: "Infierno, Purgatorio, Divina Comedia, entre otras."
      },

      {
        id: 4,
        img: "../../../assets/shirley.jpg",
        alt: "Autora",
        nombre: "Shirley Jackson",
        libros: "La Lotería, La Maldición de Hill House, entre otras"
      }
    ]

    /* Info tarjetas (libros) destacadas */

    this.infoTarjeta2 = [
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

    /* Información de los artistas destacados */

    this.infoArtista = [
      {
        id: 12,
        img: "../../../assets/acdc.jpeg",
        alt: "AC/DC",
        nombre: "AC/DC",
        descripcion: "Banda de rock británica"
      },
      {
        id: 13,
        img: "../../../assets/GreenDayFoto.png",
        alt: "Green Day",
        nombre: "Green Day",
        descripcion: "Banda de punk rock estadounidense"
      },
      {
        id: 14,
        img: "../../../assets/LinkinPark.jpeg",
        alt: "Linkin Park",
        nombre: "Linkin Park",
        descripcion: "Banda de rock alternativo estadounidense"
      },
      {
        id: 15,
        img: "../../../assets/gorillaz.jpeg",
        alt: "Gorillaz",
        nombre: "Gorillaz",
        descripcion: "Banda de electropop británica"
      }
    ]



    /* Info tarjetas (albumes) destacados */

    this.infoMusica = [
      {
        id: 16,
        img: "../../../assets/Metallica - Metallica 1991.png",
        alt: "Metallica - Metallica (1991)",
        precio: 13299,
        tituloDisco: "Metallica",
        artista: "Metallica"
      },
      {
        id: 17,
        img: "../../../assets/Back-In-Black.png",
        alt: "AC/DC - Back In Black (1980)",
        precio: 141900,
        tituloDisco: "Back In Black",
        artista: "AC/DC"
      },
      {
        id: 18,
        img: "../../../assets/Destroyer.png",
        alt: "KISS - Destroyer (1976)",
        precio: 120000,
        tituloDisco: "Destroyer",
        artista: "KISS"
      },
      {
        id: 19,
        img: "../../../assets/Hybrid Theory- Linkin Park.png",
        alt: "Linkin Park - Hybrid Theory (2000)",
        precio: 29000,
        tituloDisco: "Hybrid Theory",
        artista: "Linkin Park"
      },
      {
        id: 20,
        img: "../../../assets/americanIdiot.png",
        alt: "Green Day - American Idiot (2004)",
        precio: 22600,
        tituloDisco: "American Idiot",
        artista: "Green Day"
      },
      {
        id: 21,
        img: "../../../assets/demonDays.png",
        alt: "Gorillaz - Demon Days (2005)",
        precio: 35600,
        tituloDisco: "Demon Days",
        artista: "Gorillaz"
      },
      {
        id: 22,
        img: "../../../assets/nevermind.png",
        alt: "Nirvana - Nevermind (1991)",
        precio: 22100,
        tituloDisco: "Nevermind",
        artista: "Nirvana"
      },
      {
        id: 23,
        img: "../../../assets/theColorAnd.png",
        alt: "Foo Fighters - The Color And The Shape (1997)",
        precio: 30799,
        tituloDisco: "The Color And The Shape",
        artista: "Foo Fighters"
      },
      {
        id: 24,
        img: "../../../assets/toxicity.png",
        alt: "System Of a Down - Toxicity (2001)",
        precio: 39500,
        tituloDisco: "Toxicity",
        artista: "System Of a Down"
      },
      {
        id: 25,
        img: "../../../assets/appetiteForDest.png",
        alt: "Guns N' Roses - Appetite For Destruction (1987)",
        precio: 23400,
        tituloDisco: "Appetite For Destruction",
        artista: "Guns N' Roses"
      },
      {
        id: 26,
        img: "../../../assets/bohemianRhapsody.png",
        alt: "Queen - Queen II (1974)",
        precio: 62999,
        tituloDisco: "Queen II",
        artista: "Queen"
      },
      {
        id: 27,
        img: "../../../assets/Black Sabbath - Paranoid (1970).png",
        alt: "Black Sabbath - Paranoid (1970)",
        precio: 20600,
        tituloDisco: "Paranoid",
        artista: "Black Sabbath"
      }
    ];


  }

  selectCard: any = null;

  verMasInformacion(tarjeta: any) {
    this.selectCard = tarjeta;
  }

  seleccionarTarjeta: any = null;

  verInfo(card: any) {
    this.seleccionarTarjeta = card;
  }
}
