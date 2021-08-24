import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseEstudiante } from '../model/req-response-estudiante';
import { environment } from "C:/Users/sergio.sanchez/Desktop/Angular/Estudiantes/GestionPersonasEstudiantesApp-main/src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseUrl = environment.baseUrl
  objeto=environment.estudiantes

  constructor(private http: HttpClient) {
    console.log('estudiantes services listo')
  }

  cargarStudents():Observable<Array<ResponseEstudiante>> {

    const url=this.baseUrl + this.objeto;

    return this.http.get<Array<ResponseEstudiante>>(url);
  }

  getStudent(id: string | null):Observable<ResponseEstudiante>  {

    const url = this.baseUrl + this.objeto + id;

    return this.http.get<ResponseEstudiante>(url);
  }

  eliminarStudent(id: number):Observable<Object> {
    const url = this.baseUrl + this.objeto + id;


    return this.http.delete(url);
  }

  aniadirStudent(student: []):Observable<Object> {

     const url=this.baseUrl + this.objeto;
 
     return this.http.post(url,student);
  }

  editarStudent(student: [], id: number):Observable<Object> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.put(url, student);
  }
}