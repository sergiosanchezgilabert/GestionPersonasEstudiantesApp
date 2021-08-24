import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogEstudianteComponent } from '../dialog-estudiante/dialog-estudiante.component';
import { EstudiantesService } from '../services/estudiantes-service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss']
})
export class ListaEstudiantesComponent implements OnInit {

  public estudiantes: any = []

  constructor(private estudiantesService: EstudiantesService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.estudiantesService.cargarStudents()
      .subscribe((resp) => {
        this.estudiantes = resp;
      });
  }

  procesarBorrado(id: number) {
    console.log(this.estudiantes)
    this.estudiantes.splice(id - 2, 1);
    console.log(this.estudiantes)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEstudianteComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.estudiantes.push(result);
        this.estudiantesService.aniadirStudent(result)
      }
    });
  }

}
