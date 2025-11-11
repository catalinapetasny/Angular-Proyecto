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

    this.infoMusica = [
            {
        id: 16,
        img: "../../../assets/Metallica - Metallica 1991.png",
        alt: "Metallica - Metallica (1991)",
        precio: 58990,
        tituloDisco: "Metallica",
        artista: "Metallica"
      },
      {
        id: 17,
        img: "../../../assets/Back-In-Black.png",
        alt: "AC/DC - Back In Black (1980)",
        precio: 58990,
        tituloDisco: "Back In Black",
        artista: "AC/DC"
      },
      {
        id: 18,
        img: "../../../assets/Destroyer.png",
        alt: "KISS - Destroyer (1976)",
        precio: 58990,
        tituloDisco: "Destroyer",
        artista: "KISS"
      },
      {
        id: 19,
        img: "../../../assets/Hybrid Theory- Linkin Park.png",
        alt: "Linkin Park - Hybrid Theory (2000)",
        precio: 58990,
        tituloDisco: "Hybrid Theory",
        artista: "Linkin Park"
      },
      {
        id: 20,
        img: "../../../assets/americanIdiot.png",
        alt: "Green Day - American Idiot (2004)",
        precio: 58990,
        tituloDisco: "American Idiot",
        artista: "Green Day"
      },
      {
        id: 21,
        img: "../../../assets/demonDays.png",
        alt: "Gorillaz - Demon Days (2005)",
        precio: 58990,
        tituloDisco: "Demon Days",
        artista: "Gorillaz"
      },
      {
        id: 22,
        img: "../../../assets/nevermind.png",
        alt: "Nirvana - Nevermind (1991)",
        precio: 58990,
        tituloDisco: "Nevermind",
        artista: "Nirvana"
      },
      {
        id: 23,
        img: "../../../assets/theColorAnd.png",
        alt: "Foo Fighters - The Color And The Shape (1997)",
        precio: 58990,
        tituloDisco: "The Color And The Shape",
        artista: "Foo Fighters"
      },
      {
        id: 24,
        img: "../../../assets/toxicity.png",
        alt: "System Of a Down - Toxicity (2001)",
        precio: 58990,
        tituloDisco: "Toxicity",
        artista: "System Of a Down"
      },
      {
        id: 25,
        img: "../../../assets/appetiteForDest.png",
        alt: "Guns N' Roses - Appetite For Destruction (1987)",
        precio: 58990,
        tituloDisco: "Appetite For Destruction",
        artista: "Guns N' Roses"
      },
      {
        id: 26,
        img: "../../../assets/bohemianRhapsody.png",
        alt: "Queen - Queen II (1974)",
        precio: 76980,
        tituloDisco: "Queen II",
        artista: "Queen"
      },
      {
        id: 27,
        img: "../../../assets/Black Sabbath - Paranoid (1970).png",
        alt: "Black Sabbath - Paranoid (1970)",
        precio: 58990,
        tituloDisco: "Paranoid",
        artista: "Black Sabbath"
      }
    ];
  }

    selectCard: any = null;

  verMasInformacion(tarjeta: any) {
    this.selectCard = tarjeta;
  }
  
}
