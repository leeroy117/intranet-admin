import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DirectorioService } from 'src/app/services/directorio.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DirectorioComponent implements OnInit {

  @Output() title: string = 'Directorio';

  /*public trabajadores =[
    "Ernesto Torres",
    "Leeroy Garcia",
    "David Gonzalez",
    "Armando Sánchez",
    "Monica Mejía",
    "Adriana Hernández",
    "Jonathan Martínez",
    "Ramón Vazquez"
  ]*/
  direcList: any =[];

  constructor(private directorioService: DirectorioService) { 
  }
  ngOnInit(): void {
    this.directorio();
  }


  directorio(){
    this.directorioService.getDirectorio().subscribe ((response: any) =>this.direcList = response.data);
  }


}
