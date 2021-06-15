import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  URL = 'http://localhost:3000/agenda/usuarios/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.URL);
  }

  borrarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  agregarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.URL, usuario);
  }

  obtenerEditarUsuario(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`);
  }

  editarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, usuario);
  }
}
