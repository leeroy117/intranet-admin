import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  @Output() title: string = 'Marcas';

   

  constructor() { }

  ngOnInit(): void {
  
  }


}
