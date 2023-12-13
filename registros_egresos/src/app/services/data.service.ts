import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl; // Usando la URL proporcionada por el entorno

  constructor(private http: HttpClient) { }

  // Método para obtener datos de la API
  getDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/datos`);
  }
  
  // Otros métodos para interactuar con la API o manipular datos
}
