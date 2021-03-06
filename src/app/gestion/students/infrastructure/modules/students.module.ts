import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstudiantesComponent } from '../presentation/lista-estudiantes/lista-estudiantes.component';
import { DialogEstudianteComponent } from '../presentation/dialog-estudiante/dialog-estudiante.component';
import { StudentComponent } from '../presentation/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

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