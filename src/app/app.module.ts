import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './students/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEstudianteComponent } from './students/dialog-estudiante/dialog-estudiante.component';
import { ListaPersonasComponent } from './personas/lista-personas/lista-personas.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { ContadorComponent } from './contador/contador.component';
import { DialogPersonaComponent } from './personas/dialog-persona/dialog-persona.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandlerService } from './error/services/global-error-handler-service';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
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