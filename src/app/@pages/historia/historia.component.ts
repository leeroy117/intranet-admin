import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {


  @Output() title: string = 'Historia';

  constructor() { 

  }

  ngOnInit(): void {
    $.getScript('../assets/ramon/movimiento.js');
  }

  


}
