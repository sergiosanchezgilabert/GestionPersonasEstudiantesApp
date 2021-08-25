import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditarPersonaComponent } from '../presentation/editar-persona/editar-persona.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioPersonaComponent } from '../presentation/formulario-persona/formulario-persona.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  {
    path: ':id',
    component:EditarPersonaComponent
  }
];

@NgModule({
  declarations: [
    EditarPersonaComponent,
    FormularioPersonaComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class ListaPersonasModule { }
