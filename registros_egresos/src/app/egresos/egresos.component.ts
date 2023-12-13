// egresos.component.ts
import { Component } from '@angular/core';
import { EgresosService } from 'src/app/services/egresos.s/egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {
  egreso = {
    nombre: '',
    apellido: '',
    rut: null,
    correo: '',
    password: ''
    // Agrega otros campos aquí si es necesario
  };

  egresoIngresado: any = {}; // Propiedad para almacenar el último egreso ingresado

  constructor(private egresoService: EgresosService) { }

  onSubmit() {
    console.log('Egreso enviado:', this.egreso);

    this.egresoService.guardarEgreso(this.egreso)
      .subscribe(
        (response) => {
          console.log('Egreso guardado con éxito:', response);
          // Actualizar egresoIngresado con el egreso guardado
          this.egresoIngresado = response; // Asumiendo que la respuesta contiene el egreso guardado
        },
        (error) => {
          console.error('Error al guardar el Egreso:', error);
          // Manejar el error en caso de falla
        }
      );

    this.egreso = {
      nombre: '',
      apellido: '',
      rut: null,
      correo: '',
      password: ''
      // Reiniciar otros campos si es necesario
    };
  }
}
