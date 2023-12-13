import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.s/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuario = {
    nombre: '',
    apellido: '',
    rut: null,
    correo: '',
    password: ''
    // Agrega otros campos aquí si es necesario
  };

  usuarioIngresado: any = {}; // Propiedad para almacenar el último usuario ingresado

  constructor(private usuarioService: UsuariosService) { }

  onSubmit() {
    console.log('Usuario enviado:', this.usuario);

    this.usuarioService.guardarUsuario(this.usuario)
      .subscribe(
        (response) => {
          console.log('Usuario guardado con éxito:', response);
          // Actualizar usuarioIngresado con el usuario guardado
          this.usuarioIngresado = response; // Asumiendo que la respuesta contiene el usuario guardado
        },
        (error) => {
          console.error('Error al guardar el usuario:', error);
          // Manejar el error en caso de falla
        }
      );

    this.usuario = {
      nombre: '',
      apellido: '',
      rut: null,
      correo: '',
      password: ''
      // Reiniciar otros campos si es necesario
    };
  }
}
