import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'estudiantes-app';

  ngOnInit(): void {

  }

  constructor(private router: Router) {
  }

  listaEstudiantes() {
    this.router.navigateByUrl('app-lista-estudiantes');
  }

  listaPersonas() {
    this.router.navigateByUrl('app-lista-personas');
  }

  home(){
    this.router.navigateByUrl('');
  }

}
