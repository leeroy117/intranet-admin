import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {

  public titulo: string;

  constructor() { 

    this.titulo="Directorio";

  }
  ngOnInit(): void {
  }

}
