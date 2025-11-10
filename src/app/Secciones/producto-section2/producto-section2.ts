import { Component } from '@angular/core';
import { Destacados, Musica } from '../../models/destacados';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-section2',
  imports: [CommonModule],
  templateUrl: './producto-section2.html',
  styleUrl: './producto-section2.css'
})
export class ProductoSection2 {
  //Propiedad pública para los álbumes
  public Album: Musica[];
  public Libro: Destacados[];

  constructor() {
    this.Libro = [
      {
        id: 1,
        img: "../../../assets/holly.jpeg",
        alt: "Holly de Stephen King",
        precio: 52330,
        tituloLibro: "Holly",
        autor: "Stephen King"
      },
      {
        id: 1,
        img: "../../../assets/holly.jpeg",
        alt: "Holly de Stephen King",
        precio: 52330,
        tituloLibro: "Holly",
        autor: "Stephen King"
      },
      {
        id: 1,
        img: "../../../assets/holly.jpeg",
        alt: "Holly de Stephen King",
        precio: 52330,
        tituloLibro: "Holly",
        autor: "Stephen King"
      }
    ];

    this.Album = [

    ];
  }

  seleccionarTarjeta: any = null; //

  verInformacion(card: any) {
    this.seleccionarTarjeta = card;
  }
}
