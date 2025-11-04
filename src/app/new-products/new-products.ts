import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Destacados } from '../models/destacados';

/*
  formControl -> Controlador de cada dato ingresado
  formGroup -> directiva para formularios reactivos en Angular, agrupa cada formControl
  ReactiveFormsModule -> Permite usar formularios reactivos
  Validators -> Valida cada dato que ingreses 
*/

@Component({
  selector: 'app-new-products',
  imports: [ReactiveFormsModule],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css',
})
export class NewProducts {
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
