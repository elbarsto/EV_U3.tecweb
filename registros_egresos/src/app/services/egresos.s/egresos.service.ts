import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  guardarEgreso(egreso: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/egresos`, egreso);
  }

  obtenerEgresos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/egresos`);
  }
  
  // Otros métodos para interactuar con la API
}
