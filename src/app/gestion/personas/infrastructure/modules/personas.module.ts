import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPersonasComponent } from '../presentation/lista-personas/lista-personas.component';
import { PersonaComponent } from '../presentation/persona/persona.component';
import { DialogPersonaComponent } from '../presentation/dialog-persona/dialog-persona.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { EditarPersonaComponent } from '../presentation/editar-persona/editar-persona.component';
import { FormularioPersonaComponent } from '../presentation/formulario-persona/formulario-persona.component';

const routes: Routes = [
  {
      path: '',
      component: ListaPersonasComponent
    
  },
  {
    path: 'editar-persona',
    //component:EditarPersonaComponent
    loadChildren:()=> import ('./editar-persona.module').then(m=>m.ListaPersonasModule)
  },

];

@NgModule({
  declarations: [
    ListaPersonasComponent,
    PersonaComponent,
    DialogPersonaComponent,
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
export class PersonasModule { }