import { Component } from '@angular/core';
import { Ofertas } from '../../models/ofertas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oferta',
  imports: [CommonModule],
  templateUrl: './oferta.html',
  styleUrl: './oferta.css'
})
export class Oferta {
  public detalleOfertas: Ofertas[];

  constructor() {
    this.detalleOfertas = [
      {
        id: 1,
        img: "../../../assets/elCuervo.jpeg",
        titulo: "El Cuervo - Edgar Allan Poe",
        precioOriginal: 25000,
        precioOferta: 14999,
        categoria: "libro"
      },
      {
        id: 2,
        img: "../../../assets/elGatoNegro.jpeg",
        titulo: "El Gato Negro - Edgar Allan Poe",
        precioOriginal: 24000,
        precioOferta: 13990,
        categoria: "libro"
      },
      {
        id: 3,
        img: "../../../assets/elColeccionista.jpeg",
        titulo: "El Coleccionista - John Fowles",
        precioOriginal: 35000,
        precioOferta: 19990,
        categoria: "libro"
      },

      {
        id: 4,
        img: "../../../assets/letThereBeRock.jpeg",
        titulo: "Let There Be Rock - AC/DC",
        precioOriginal: 60000,
        precioOferta: 37999,
        categoria: "album"
      },
      {
        id: 5,
        img: "../../../assets/londonCalling.jpeg",
        titulo: "London Calling - The Clash",
        precioOriginal: 65000,
        precioOferta: 38999,
        categoria: "album"
      },
      {
        id: 6,
        img: "../../../assets/zenyatta.jpeg",
        titulo: "Zenyatta Mondatta - The Police",
        precioOriginal: 55000,
        precioOferta: 33990,
        categoria: "album"
      },

      {
        id: 7,
        img: "../../../assets/mascaraMuerteRoja.jpg",
        titulo: "La Máscara de la Muerte Roja - Edgar Allan Poe",
        precioOriginal: 30000,
        precioOferta: 17990,
        categoria: "libro"
      },
      {
        id: 8,
        img: "../../../assets/cujo.jpeg",
        titulo: "Cujo - Stephen King",
        precioOriginal: 42000,
        precioOferta: 24999,
        categoria: "libro"
      },
      {
        id: 9,
        img: "../../../assets/pasilloDeLaMuerte.png",
        titulo: "El Pasillo de la Muerte - Stephen King",
        precioOriginal: 39999,
        precioOferta: 22990,
        categoria: "libro"
      },

      {
        id: 10,
        img: "../../../assets/andJusticeForAll.jpeg",
        titulo: "…And Justice for All - Metallica",
        precioOriginal: 70000,
        precioOferta: 42990,
        categoria: "album"
      },
      {
        id: 11,
        img: "../../../assets/loveGun.jpeg",
        titulo: "Love Gun - KISS",
        precioOriginal: 62000,
        precioOferta: 38990,
        categoria: "album"
      },
      {
        id: 12,
        img: "../../../assets/Dookie.png",
        titulo: "Dookie - Green Day",
        precioOriginal: 58000,
        precioOferta: 34999,
        categoria: "album"
      },

      {
        id: 13,
        img: "../../../assets/holly.jpg",
        titulo: "Holly - Stephen King",
        precioOriginal: 50000,
        precioOferta: 28990,
        categoria: "libro"
      },
      {
        id: 14,
        img: "../../../assets/laLoteria.jpeg",
        titulo: "La Lotería - Shirley Jackson",
        precioOriginal: 28000,
        precioOferta: 16990,
        categoria: "libro"
      },
      {
        id: 15,
        img: "../../../assets/maldicion.jpg",
        titulo: "La Maldición de Hill House - Shirley Jackson",
        precioOriginal: 31000,
        precioOferta: 17990,
        categoria: "libro"
      },

      {
        id: 16,
        img: "../../../assets/gorillazAlbum.jpeg",
        titulo: "Gorillaz - Gorillaz",
        precioOriginal: 64000,
        precioOferta: 37999,
        categoria: "album"
      },
      {
        id: 17,
        img: "../../../assets/meteora.jpeg",
        titulo: "Meteora - Linkin Park",
        precioOriginal: 6000,
        precioOferta: 40999,
        categoria: "album"
      },
      {
        id: 18,
        img: "../../../assets/useYourIllusion2.jpeg",
        titulo: "Use Your Illusion II - Guns N' Roses",
        precioOriginal: 72000,
        precioOferta: 41999,
        categoria: "album"
      }
    ];
  }
}