import { Component } from '@angular/core';
import { Destacados } from '../models/destacados'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/*
  formControl -> Controlador de cada dato ingresado
  formGroup -> directiva para formularios reactivos en Angular, agrupa cada formControl
  ReactiveFormsModule -> Permite usar formularios reactivos
  Validators -> Valida cada dato que ingreses 
*/

@Component({
  selector: 'app-new-products',
  imports: [],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css',
})
export class NewProducts {

}
