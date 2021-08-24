import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogEstudianteComponent } from '../dialog-estudiante/dialog-estudiante.component';
import { ResponseEstudiante } from '../req-response-estudiante';
import { EstudiantesService } from '../estudiantes-service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() estudiante: ResponseEstudiante;

  @Output() propagar = new EventEmitter<number>();

  constructor(private estudiantesService: EstudiantesService, private router: Router,
    public dialog: MatDialog) {
    
  }

  editar(id: number) {
    this.router.navigate(['/editar-estudiante', id]);
  }

  borrar(id: number) {

    this.estudiantesService.eliminarStudent(id)
      .subscribe((resp) => {
        alert("Eliminado")
      })

    this.propagar.emit(id);
  }

  editarOn(estudiante:ResponseEstudiante){
    const dialogRef = this.dialog.open(DialogEstudianteComponent, {
      width: '250px',
      data: {estudiante:estudiante}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.estudiante=result;
      }
    });
  }

  ngOnInit(): void {
  }

}
