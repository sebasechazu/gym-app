import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  imports: [],
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent {

  ejercicios = [
    { nombre: 'Flexiones', descripcion: 'Fortalecen el pecho y tríceps.' },
    { nombre: 'Sentadillas', descripcion: 'Trabajan piernas y glúteos.' },
    { nombre: 'Plancha', descripcion: 'Fortalece el núcleo y espalda.' },
  ];

  agregarARutina(ejercicio: any): void {
    console.log('Ejercicio agregado a la rutina:', ejercicio);
    // Aquí puedes implementar lógica para agregar a la rutina
  }

}
