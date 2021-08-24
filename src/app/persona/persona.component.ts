import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsePersona } from '../model/req-response-persona';
import { PersonasService } from '../services/personas-service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  @Input() persona: ResponsePersona;

  @Output() propagar = new EventEmitter<number>();

  constructor(private personasService: PersonasService, private router: Router) {
  }

  editar(id: number) {
    this.router.navigate(['/editar-persona', id]);
  }

  borrar(id: number) {

    this.personasService.eliminarPersona(id)
      .subscribe((resp) => {
        alert("Eliminado")
      })

    this.propagar.emit(id);
  }

  ngOnInit(): void {

  }
}
