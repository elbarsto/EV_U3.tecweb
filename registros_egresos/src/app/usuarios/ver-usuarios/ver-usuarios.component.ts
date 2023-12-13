import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent {
  usuarios: any[] = []; // Propiedad para almacenar una lista de usuarios

  // Función para recibir datos de usuarios desde UsuariosComponent
  recibirDatosUsuarios(datos: any[]) {
    this.usuarios = datos; // Asignar los datos recibidos a la propiedad 'usuarios'
  }
}
