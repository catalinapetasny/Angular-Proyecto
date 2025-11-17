import { Component } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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
  coleccionProductos: Mensaje[] = [];

  // Instancia que se vincula con el formulario desde el HTML

  /*
    string -> '' - number -> null
    Validators.required -> validado como valor requerido estrictamente
  */

  nuevoMensaje = new FormGroup({
    mensaje: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required), 
    nombre: new FormControl('')
  });

  /**
  * @description Método de descripción de productos
  */

  enviarMensaje(): void {
    if (this.nuevoMensaje.valid) {
      const nuevoMensaje: Mensaje = {
        id: this.contadorId++,
        /*
        resto de propiedades, asignamos desde el formulario el valor que se recibio
        desde su casilla o formControlName
        */
        mensaje: this.nuevoMensaje.value.mensaje!,
        email: this.nuevoMensaje.value.email!,
        nombre: this.nuevoMensaje.value.nombre!
      }

      //Agregamos un nuevo producto a colección productos
      this.coleccionProductos.push(nuevoMensaje);

      alert("Se ha enviado el mensaje correctamente")
      console.log(`Mensaje enviado: ${nuevoMensaje}`);

      //Reseteamos el formulario
      this.nuevoMensaje.reset();
    }
  }

}
