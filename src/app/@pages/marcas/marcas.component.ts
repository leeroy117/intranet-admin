import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  public titulo: string;

  public marcas =[
    {
      tl:"Eartha Films",
      des :"Empresa de Producción y Contenido Audiovisual de Negocios, Capacitación y Eventos Corporativos."
    },
    {
      tl: "AG College",
      des:"Institución de tecnología educativa en programas académicos de Bachillerato Oficial Corporativo."
    },
    {
      tl: "Universidad Mexico Internacional",
      des: 
      "Institución de tecnología educativa, de Niveles Superior y Posgrado, Certificaciones Ejecutivas y Títulos Propios."
    }
  ]

  constructor() { 

    this.titulo="Marcas";

  }

  ngOnInit(): void {
  }

}
