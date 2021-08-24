import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsePersona } from '../model/req-response-persona';
import { PersonasService } from '../services/personas-service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.scss']
})
export class EditarPersonaComponent implements OnInit {

  persona: ResponsePersona;

  showPersona: boolean;

  constructor(private route: ActivatedRoute, private personasService: PersonasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.showPersona = false;
      this.personasService.getPersona(param.get("id"))
        .subscribe((resp) => {
          this.persona = resp;
          this.showPersona = true;
        });
    });
  }


}
