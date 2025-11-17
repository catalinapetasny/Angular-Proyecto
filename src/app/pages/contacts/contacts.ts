import { Component } from '@angular/core';
import { Destacados } from '../../models/destacados'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewProducts } from '../../new-products/new-products';


@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})

export class Contacts {
  // Propiedades PRIVADA -> Información sensible
  private contadorId = 1;

  // Coleccion de productos tipo PRODUCTO 
  coleccionProductos: Destacados[] = [];

  // Instancia que se vincula con el formulario desde el HTML

  /*
    string -> '' - number -> null
    Validators.required -> validado como valor requerido estrictamente
  */
  nuevoProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  });

  /**
  * @description Método de descripción de productos
  */

  crearProducto(): void {
    if (this.nuevoProducto.valid) {
      const nuevoProducto: Destacados = {
        id: this.contadorId++,
        /*
        resto de propiedades, asignamos desde el formulario el valor que se recibio
        desde su casilla o formControlName
        */
        precio: this.nuevoProducto.value.precio!,
        tituloLibro: this.nuevoProducto.value.nombre!,
        // autor: this.nuevoProducto.value.autor!,
      }

      //Agregamos un nuevo producto a colección productos
      this.coleccionProductos.push(nuevoProducto);

      console.log(`Producto agregado: ${nuevoProducto}`);
      console.log(`Coleccion actual de productos: ${this.coleccionProductos}`);

      //Reseteamos el formulario
      this.nuevoProducto.reset();
    }
  }

}
