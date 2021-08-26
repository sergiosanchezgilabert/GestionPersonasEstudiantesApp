import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseEstudiante } from '../../domain/IStudent';
import { environment } from "C:/Users/sergio.sanchez/Desktop/Angular/Estudiantes/GestionPersonasEstudiantesApp-main/src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  baseUrl = environment.baseUrl
  objeto = environment.estudiantes

  constructor(private http: HttpClient) {
    console.log('estudiantes services listo')
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  cargarStudents(): Observable<Array<ResponseEstudiante>> {

    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<ResponseEstudiante>>(url).pipe(catchError(this.errorHandler));
  }

  getStudent(id: string | null): Observable<ResponseEstudiante> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.get<ResponseEstudiante>(url).pipe(catchError(this.errorHandler));
  }

  eliminarStudent(id: number): Observable<Object> {
    const url = this.baseUrl + this.objeto + id;


    return this.http.delete(url).pipe(catchError(this.errorHandler));
  }

  aniadirStudent(student: []): Observable<Object> {

    const url = this.baseUrl + this.objeto;

    return this.http.post(url, student).pipe(catchError(this.errorHandler));
  }

  editarStudent(student: [], id: number): Observable<Object> {

    const url = this.baseUrl + this.objeto + id;

    return this.http.put(url, student).pipe(catchError(this.errorHandler));
  }
}