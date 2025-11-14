import { Component } from '@angular/core';
import { Artistas } from '../../models/autores';
import { Musica } from '../../models/destacados'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  imports: [CommonModule],
  templateUrl: './music.html',
  styleUrl: './music.css'
})
export class Music {
  public infoArtista: Artistas[];
  public infoMusica: Musica[];



  constructor() {
    this.infoArtista = [
      {
        id: 1,
        img: "../../../assets/acdc.jpeg",
        alt: "AC/DC",
        nombre: "AC/DC",
        descripcion: "Banda de rock británica"
      },
      {
        id: 2,
        img: "../../../assets/GreenDayFoto.png",
        alt: "Green Day",
        nombre: "Green Day",
        descripcion: "Banda de punk rock estadounidense"
      },
      {
        id: 3,
        img: "../../../assets/LinkinPark.jpeg",
        alt: "Linkin Park",
        nombre: "Linkin Park",
        descripcion: "Banda de rock alternativo estadounidense"
      },
      {
        id: 4,
        img: "../../../assets/gorillaz.jpeg",
        alt: "Gorillaz",
        nombre: "Gorillaz",
        descripcion: "Banda de electropop británica"
      }
    ]

    this.infoMusica = [
      {
        id: 5,
        img: "../../../assets/Metallica - Metallica 1991.png",
        alt: "Metallica - Metallica (1991)",
        precio: 58990,
        tituloDisco: "Metallica",
        artista: "Metallica"
      },
      {
        id: 6,
        img: "../../../assets/Back-In-Black.png",
        alt: "AC/DC - Back In Black (1980)",
        precio: 58990,
        tituloDisco: "Back In Black",
        artista: "AC/DC"
      },
      {
        id: 7,
        img: "../../../assets/Destroyer.png",
        alt: "KISS - Destroyer (1976)",
        precio: 58990,
        tituloDisco: "Destroyer",
        artista: "KISS"
      },
      {
        id: 8,
        img: "../../../assets/Hybrid Theory- Linkin Park.png",
        alt: "Linkin Park - Hybrid Theory (2000)",
        precio: 58990,
        tituloDisco: "Hybrid Theory",
        artista: "Linkin Park"
      },
      {
        id: 9,
        img: "../../../assets/americanIdiot.png",
        alt: "Green Day - American Idiot (2004)",
        precio: 58990,
        tituloDisco: "American Idiot",
        artista: "Green Day"
      },
      {
        id: 10,
        img: "../../../assets/demonDays.png",
        alt: "Gorillaz - Demon Days (2005)",
        precio: 58990,
        tituloDisco: "Demon Days",
        artista: "Gorillaz"
      },
      {
        id: 11,
        img: "../../../assets/nevermind.png",
        alt: "Nirvana - Nevermind (1991)",
        precio: 58990,
        tituloDisco: "Nevermind",
        artista: "Nirvana"
      },
      {
        id: 12,
        img: "../../../assets/theColorAnd.png",
        alt: "Foo Fighters - The Color And The Shape (1997)",
        precio: 58990,
        tituloDisco: "The Color And The Shape",
        artista: "Foo Fighters"
      },
      {
        id: 13,
        img: "../../../assets/toxicity.png",
        alt: "System Of a Down - Toxicity (2001)",
        precio: 58990,
        tituloDisco: "Toxicity",
        artista: "System Of a Down"
      },
      {
        id: 14,
        img: "../../../assets/appetiteForDest.png",
        alt: "Guns N' Roses - Appetite For Destruction (1987)",
        precio: 58990,
        tituloDisco: "Appetite For Destruction",
        artista: "Guns N' Roses"
      },
      {
        id: 15,
        img: "../../../assets/bohemianRhapsody.png",
        alt: "Queen - Queen II (1974)",
        precio: 76980,
        tituloDisco: "Queen II",
        artista: "Queen"
      },
      {
        id: 16,
        img: "../../../assets/Black Sabbath - Paranoid (1970).png",
        alt: "Black Sabbath - Paranoid (1970)",
        precio: 58990,
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

  selectCard: any = null;

  verMasInformacion(tarjeta: any) {
    this.selectCard = tarjeta;
  }

}
