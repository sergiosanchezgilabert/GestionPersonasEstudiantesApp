import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePersona } from '../model/req-response-persona';
import { environment } from "C:/Users/sergio.sanchez/Desktop/Angular/Estudiantes/GestionPersonasEstudiantesApp-main/src/environments/environment.prod"

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  baseUrl = environment.baseUrl
  objeto=environment.personas

  constructor(private http: HttpClient) {
    console.log('personas services listo')
  }

  cargarPersonas(): Observable<Array<ResponsePersona>> {
    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<ResponsePersona>>(url)
  }

  getPersona(id: string | null): Observable<ResponsePersona> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.get<ResponsePersona>(url);
  }

  eliminarPersona(id: number): Observable<Object> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.delete(url);
  }

  aniadirPersona(persona: []): Observable<Object> {

    const url = this.baseUrl + this.objeto;

    return this.http.post(url, persona);

  }

  editarPersona(persona: [], id: number): Observable<Object> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.put(url, persona);
  }
}