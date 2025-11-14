import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';
import { Destacados, Musica } from '../../models/destacados';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {
  public infoTarjeta: Tarjeta[]; //Productos o tarjetas principales
  public infoTarjeta2: Destacados[];
  public infoMusica: Musica[];

  constructor() {
    this.infoTarjeta = [
      {
        id: "1G",
        img: "../../../assets/laLargaMarcha.jfif",
        alt: "La Larga Marcha de Stephen King",
        titulo: "La Larga Marcha",
        descripcion: "Libro escrito por Stephen King",
        anualPublicacion: 1979
      },

      {
        id: "2E",
        img: "../../../assets/elInstituto.jfif",
        alt: "el instituto de Stephen King",
        titulo: "El Instituto",
        descripcion: "Libro escrito por Stephen King",
        anualPublicacion: 2019
      },

      {
        id: "3N",
        img: "../../../assets/elVisitante.jfif",
        alt: "el Visitante de Stephen King",
        titulo: "El Visitante",
        descripcion: "Libro escrito por Stephen King",
        anualPublicacion: 2018
      },

      {
        id: "3A",
        img: "../../../assets/theStand.jfif",
        alt: "The Stand de Stephen King",
        titulo: "The Stand",
        descripcion: "Libro escrito por Stephen King",
        anualPublicacion: 1978
      }
    ]

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
      },
      {
        id: 17,
        img: "../../../assets/fallen.png",
        alt: "Fallen - Evanescene (2003)",
        precio: 127000,
        tituloDisco: "Fallen",
        artista: "Evanescene"
      },
      {
        id: 19,
         img: "../../../assets/Sabbath Bloody Sabbath.png",
        alt: "Sabbath Bloody Sabbath - Black Sabbath (1973)",
        precio: 127000,
        tituloDisco: "Sabbath Bloody Sabbath",
        artista: "Black Sabbath"
      },
      {
        id: 20,
        img: "../../../assets/bornAgain.png",
        alt: "Born Again - Black Sabbath (1973)",
        precio: 127000,
        tituloDisco: "Born Again",
        artista: "Black Sabbath"
      },
      {
        id: 21,
        img: "../../../assets/TNT.png",
        alt: "High Voltage - AC/DC (1976)",
        precio: 127000,
        tituloDisco: "TNT",
        artista: "AC/DC"
      },
      {
        id: 22,
        img: "../../../assets/highwayToHell.png",
        alt: "Highway To Hell - AC/DC (1979)",
        precio: 127000,
        tituloDisco: "Highway To Hell",
        artista: "AC/DC"
      },
      {
        id: 23,
        img: "../../../assets/TheRazorsEdge.png",
        alt: "The Razors Edge - AC/DC (1990)",
        precio: 127000,
        tituloDisco: "The Razors Edge",
        artista: "AC/DC"
      },
      {
        id: 24,
        img: "../../../assets/Mutter.png",
        alt: "Mutter - Rammstein (2001)",
        precio: 127000,
        tituloDisco: "Mutter",
        artista: "Rammstein"
      },
      {
        id: 25,
        img: "../../../assets/Sehnsucht.png",
        alt: "Sehnsucht - Rammstein",
        precio: 127000,
        tituloDisco: "Sehnsucht",
        artista: "Rammstein"
      }
    ];
  }

  tarjetaSeleccionada: any = null;

  verMasInfo(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }

}

