import { Component } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  // Headers estáticos
  headers = [
    'Fase',
    'Fecha Inicio',
    'Iteraciones',
    'Identificacion',
    'Especificacion',
    'Disenno',
    'Implementacion',
    'Test',
  ];

  // Datos estáticos
  data = [
    {
      Fase: 'Inicio',
      'Fecha Inicio': '30/07/2018',
      Iteraciones: 1,
      Identificacion: '45%',
      Especificacion: '15%',
      Disenno: '5%',
      Implementacion: '1%',
      Test: '1%',
    },
    {
      Fase: 'Elaboración',
      'Fecha Inicio': '27/08/2018',
      Iteraciones: 3,
      Identificacion: '80%',
      Especificacion: '60%',
      Disenno: '30%',
      Implementacion: '10%',
      Test: '10%',
    },
    {
      Fase: 'Construcción',
      'Fecha Inicio': '19/11/2018',
      Iteraciones: 8,
      Identificacion: '100%',
      Especificacion: '100%',
      Disenno: '100%',
      Implementacion: '100%',
      Test: '100%',
    },
    {
      Fase: 'Transición',
      'Fecha Inicio': '01/07/2019',
      Iteraciones: 1,
      Identificacion: '100%',
      Especificacion: '100%',
      Disenno: '100%',
      Implementacion: '100%',
      Test: '100%',
    },
  ];
}
