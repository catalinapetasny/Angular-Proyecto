import { Component } from '@angular/core';
import { GaleriaItem } from '../../models/galeria-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  public detalles: GaleriaItem[];

  constructor() {
    this.detalles = [
      {
        id: 1,
        img: "../../../assets/Linkin Park - Living Things.jpeg",
        titulo: "Living Things - Linkin Park",
        descripcion: "Living Things, aĺbum musical hecho por Linkin Park",
        detalle: "..."
      },
      {
        id: 2,
        img: "../../../assets/centuryBreakdown.png",
        titulo: "21st Century Breakdown - Green Day",
        descripcion: "21 Century Breakdown, álbum musical hecho por Green Day",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 3,
        img: "../../../assets/Use Your Illusion.jpeg",
        titulo: "Use Your Ilusion - Guns 'N Roses",
        descripcion: "Use Your Ilusion, aĺbum musical hecho por Guns 'N Roses",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 4,
        img: "../../../assets/darkSide.jpeg",
        titulo: "Dark Side of The Moon - Pink Floyd",
        descripcion: "Dark Side of The Moon, aĺbum musical hecho por Pink Floyd",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 5,
        img: "../../../assets/strangerThingsBook.jpeg",
        titulo: "Stranger Things - World Turns Upside Down",
        descripcion: "Libro oficial de Stranger Things",
        detalle: "Explora el pasado del laboratorio Hawkins y sus secretos."
      },
      {
        id: 6,
        img: "../../../assets/TheDivineComedy.png",
        titulo: "La Divina Comedia",
        descripcion: "Libro oficial de Dante",
        detalle: "Explora las 9 etapas del infierno"
      },
      {
        id: 7,
        img: "../../../assets/dracula.png",
        titulo: "Dracula",
        descripcion: "Dracula, novela de terror escrita por Bram Stoker",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 8,
        img: "../../../assets/misery.png",
        titulo: "Misery",
        descripcion: "Misery, novela de terror escrita por Stephen King",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 9,
        img: "../../../assets/theClash.jpeg",
        titulo: "Combat Rock",
        descripcion: "Combat Rock, un álbum musical hecho por The Clash",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 10,
        img: "../../../assets/kiss.jpeg",
        titulo: "Dynasty",
        descripcion: "Dynasty, un álbum musical hecho por Kiss",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 11,
        img: "../../../assets/master of puppets.jpeg",
        titulo: "Master Of Puppets",
        descripcion: "Master Of Puppets, un álbum musical hecho por Metallica",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      },
      {
        id: 12,
        img: "../../../assets/Plastic Beach.jpeg",
        titulo: "Plastic Beach",
        descripcion: "Plastic Beach, un álbum musical hecho por Gorillaz",
        detalle: "Un disco polémico, oscuro y único dentro de la discografía"
      }
    ]
  }

  itemSeleccionado: any = null;

  verDetalle(tarjeta: any) {
    this.itemSeleccionado = tarjeta;
  }
}
