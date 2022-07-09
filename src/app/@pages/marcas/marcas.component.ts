import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  @Output() title: string = 'Marcas';

  public marcas =[
    {
      title:"Eartha Films",
      description :"Empresa de Producción y Contenido Audiovisual de Negocios, Capacitación y Eventos Corporativos."
    },
    {
      title: "AG College",
      description:"Institución de tecnología educativa en programas académicos de Bachillerato Oficial Corporativo."
    },
    {
      title: "Universidad Mexico Internacional",
      description: 
      "Institución de tecnología educativa, de Niveles Superior y Posgrado, Certificaciones Ejecutivas y Títulos Propios."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
