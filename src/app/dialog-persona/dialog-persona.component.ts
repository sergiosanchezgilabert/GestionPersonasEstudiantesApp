import { Component, OnInit, Inject, Input,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsePersona } from '../model/req-response-persona';
import { PersonasService } from '../services/personas-service';

@Component({
  selector: 'app-dialog-persona',
  templateUrl: './dialog-persona.component.html',
  styleUrls: ['./dialog-persona.component.scss']
})
export class DialogPersonaComponent implements OnInit {

  @Input() persona: ResponsePersona;

  constructor(
    public dialogRef: MatDialogRef<DialogPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponsePersona,private formBuilder: FormBuilder, 
    private personasService: PersonasService, 
    private route: ActivatedRoute, private router: Router) {}

  onNoClick(): void {
    this.dialogRef.close(this.persona);
  }

  registerForm = this.formBuilder.group({

    user: ['',Validators.required],
    password: ['',Validators.required],
    surname: ['',Validators.required],
    company_email: ['',Validators.required],
    personal_email: ['',Validators.required],
    city: ['',Validators.required],
    active: [true,Validators.required],
    create_date: ['',Validators.required],
    imagen_url: ['',Validators.required],
    termination_date: ['',Validators.required],
  });

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    if (change.persona) {
      this.registerForm.patchValue(this.persona)
    }
  }

  aniadirDatos() {
    this.personasService.aniadirPersona(this.registerForm.value)
    .subscribe(() => {
      alert("Añadido");
      this.dialogRef.close(this.registerForm.value);
    })
  }

}
