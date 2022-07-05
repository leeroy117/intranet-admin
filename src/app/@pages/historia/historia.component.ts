import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {


  public titulo: string;

  constructor() { 

    this.titulo="Historia";

  }

  ngOnInit(): void {
  }

}
