import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'editar-persona',
    loadChildren:()=> import ('./modules/editar-persona.module').then(m=>m.ListaPersonasModule)
  },
  {
    path: 'inicio',
    component: AppComponent
  },
  {
    path: 'app-lista-estudiantes',
    component: ListaEstudiantesComponent
  },
  {
    path: 'app-lista-personas',
    component: ListaPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }