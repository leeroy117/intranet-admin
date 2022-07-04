import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  public titulo: string;

  constructor() { 

    this.titulo="Marcas";

  }

  ngOnInit(): void {
  }

}
