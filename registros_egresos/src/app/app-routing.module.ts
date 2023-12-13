import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EgresosComponent } from './egresos/egresos.component';
import { VerUsuariosComponent } from './usuarios/ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './egresos/ver-egresos/ver-egresos.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/ver-usuarios', component: VerUsuariosComponent },
  { path: 'egresos', component: EgresosComponent },
  { path: 'egresos/ver-egresos', component: VerEgresosComponent },
  // Otras rutas o configuraciones
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
