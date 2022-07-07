import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {

  public titulo: string;

  public trabajadores =[
    "Ernesto Torres",
    "Leeroy Garcia",
    "David Gonzalez",
    "Armando Sánchez",
    "Monica Mejía",
    "Adriana Hernández",
    "Jonathan Martínez",
    "Ramón Vazquez"
  ]

  constructor() { 

    this.titulo="Directorio";

  }
  ngOnInit(): void {
  }

}
