import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsePersona } from '../model/req-response-persona';
import { PersonasService } from '../services/personas-service';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit, OnChanges {

  @Input() persona: ResponsePersona;

  constructor(private formBuilder: FormBuilder, private personasService: PersonasService, private route: ActivatedRoute, private router: Router) { }


  registerFormPersona = this.formBuilder.group({

    user: [''],
    password: [''],
    surname: [''],
    company_email: [''],
    personal_email: [''],
    city: [''],
    active: [true],
    create_date: [''],
    imagen_url: [''],
    termination_date: [''],
  });

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges): void {
    if (change.persona) {
      console.log(this.persona)
      this.registerFormPersona.patchValue(this.persona)
    }
  }


  submit() {
    //console.log(this.registerFormPersona.value);
  }

  cancelar() {

    this.router.navigateByUrl('app-lista-personas');  }

  enviarDatos(id: number) {

    console.log(this.registerFormPersona.value)
    this.personasService.editarPersona(this.registerFormPersona.value, id)
      .subscribe(() => {
        alert("Editado")
      })
    this.router.navigateByUrl('app-lista-personas');
  }
}
