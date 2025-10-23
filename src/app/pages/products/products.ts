import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {
  public infoTarjeta: Tarjeta[];

  constructor (){
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
  }

  tarjetaSeleccionada: any = null;

  verMasInfo(tarjeta : any){
    this.tarjetaSeleccionada = tarjeta;
  }

}

