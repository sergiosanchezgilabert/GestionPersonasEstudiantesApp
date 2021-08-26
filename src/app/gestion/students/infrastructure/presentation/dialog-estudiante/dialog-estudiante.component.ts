import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ResponseEstudiante } from '../../../domain/IStudent';
import { EstudiantesService } from '../../services/estudiantes-service';

@Component({
  selector: 'app-dialog-estudiante',
  templateUrl: './dialog-estudiante.component.html',
  styleUrls: ['./dialog-estudiante.component.scss']
})
export class DialogEstudianteComponent implements OnInit, OnChanges {

  @Input() estudiante: ResponseEstudiante;

  editando: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<DialogEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
    private estudiantesService: EstudiantesService,
    private route: ActivatedRoute, private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close(this.estudiante);
  }

  registerForm = this.formBuilder.group({

    num_hours_week: ['', Validators.required],
    coments: ['', Validators.required],
    branch: ['', Validators.required],
    id_persona: ['', Validators.required],
    id: ['']
  });



  ngOnInit(): void {
    if (this.data !== null) {
      this.estudiante = this.data.estudiante;
      this.registerForm.patchValue(this.data.estudiante);
      this.editando = true;
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.estudiante) {
      this.registerForm.patchValue(this.estudiante)
    }
    if (change.data) {
      // this.registerForm.patchValue(this.data)
    }
    if (change.registerForm) {
      this.registerForm.valid
    }
  }

  aniadirDatos() {
    if (this.editando == true) {
      this.estudiantesService.editarStudent(this.registerForm.value, this.estudiante.id)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Estudiante modificado',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.registerForm.value);
        })
    } else {
      this.estudiantesService.aniadirStudent(this.registerForm.value)
        .subscribe(() => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Estudiante añadido',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close(this.registerForm.value);
        })
    }
  }

  
}
