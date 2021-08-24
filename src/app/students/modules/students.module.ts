import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../modules/material.module';
import { ListaEstudiantesComponent } from '../lista-estudiantes/lista-estudiantes.component';
import { DialogEstudianteComponent } from '../dialog-estudiante/dialog-estudiante.component';
import { StudentComponent } from '../student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      component: ListaEstudiantesComponent
    
  }
];

@NgModule({
  declarations: [
    ListaEstudiantesComponent,
    StudentComponent,
    DialogEstudianteComponent,

  ],
  imports: [
    MaterialModule,

    ReactiveFormsModule,
    FormsModule,
    
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class StudentsModule { }