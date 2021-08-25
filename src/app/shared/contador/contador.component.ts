import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

   numero:number;

  constructor() { this.numero=0;}

  ngOnInit(): void {
    this.numero=0;
  }

  sumar(){
    this.numero+=1;
  }

}