import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {

  @Output() title: string = 'Directorio';

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
  }
  ngOnInit(): void {
  }

}
