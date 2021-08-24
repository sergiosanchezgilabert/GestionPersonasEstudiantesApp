import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContadorComponent } from '../contador/contador.component';
import { DialogPersonaComponent } from '../dialog-persona/dialog-persona.component';
import { PersonasService } from '../services/personas-service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent implements OnInit {

  public personas: any = []

  contador: ContadorComponent = new ContadorComponent();

  numero: string | null = "";

  constructor(private personasService: PersonasService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.personasService.cargarPersonas()
      .subscribe((resp) => {
        this.personas = resp;
      });
    this.contador.numero = Number( localStorage.getItem("numero"));
    this.numero=localStorage.getItem("numero");
  }


  procesarBorradoPersona(id: number) {
    console.log(this.contador.numero)

    this.personas.splice(id - 1, 1);
    this.contador.sumar();
    localStorage.setItem("numero", this.contador.numero.toString())
    this.numero=localStorage.getItem("numero");
    console.log(this.contador.numero)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPersonaComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.personas.push(result);
        this.personasService.aniadirPersona(result)
      }
    });
  }

  aniadirPersona(){
    this.router.navigateByUrl('aniadir-persona');
  }
}
