import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEstudianteComponent } from './dialog-estudiante/dialog-estudiante.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { PersonaComponent } from './persona/persona.component';
import { ContadorComponent } from './contador/contador.component';
import { DialogPersonaComponent } from './dialog-persona/dialog-persona.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandlerService } from './services/global-error-handler-service';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ListaEstudiantesComponent,
    DialogEstudianteComponent,
    ListaPersonasComponent,
    PersonaComponent,
    ContadorComponent,
    DialogPersonaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }