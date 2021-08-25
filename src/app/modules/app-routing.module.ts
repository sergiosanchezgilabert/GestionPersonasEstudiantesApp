import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'inicio',
    component: AppComponent
  },
  {
    path: 'app-lista-estudiantes',
    loadChildren:()=> import ('../students/infrastructure/modules/students.module').then(m=>m.StudentsModule)  
  },
  {
    path: 'app-lista-personas',
    loadChildren:()=> import ('../personas/infrastructure/modules/personas.module').then(m=>m.PersonasModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }