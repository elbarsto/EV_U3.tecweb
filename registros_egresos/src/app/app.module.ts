import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EgresosComponent } from './egresos/egresos.component';
import { VerUsuariosComponent } from './usuarios/ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './egresos/ver-egresos/ver-egresos.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './services/service/service.component'; // Reemplaza ServicesComponent con el nombre correcto si es diferente

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EgresosComponent,
    VerUsuariosComponent,
    VerEgresosComponent,
    ServicesComponent,
    ServiceComponent // Asegúrate de tener el nombre correcto del componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
