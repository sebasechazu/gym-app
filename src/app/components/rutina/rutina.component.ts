import { Component } from '@angular/core';

@Component({
  selector: 'app-rutina',
  imports: [],
  templateUrl: './rutina.component.html',
  styles: ``
})
export class RutinaComponent {

  rutina = [
    { nombre: 'Flexiones', descripcion: 'Fortalecen el pecho y tríceps.' },
  ];

  eliminarDeRutina(ejercicio: any): void {
    this.rutina = this.rutina.filter((e) => e !== ejercicio);
  }
}
