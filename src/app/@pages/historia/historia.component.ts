import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {


  @Output() title: string = 'Historia';

  public datos=[

    {
      year:"2010",
      description:"Grupo AG fundado por Nelson Amparán y Karla Garzón como corporativo de consultoría y desarrollo ejecutivo."
    },
    {
      year:"2012",
      description:"Inicia operaciones la unidad de negocios dUC (Desarrollo de Universidades Corporativas) que tiene como propósito implementar modelos de formación, educación y capacitación customizados a las organizaciones y empresas de México y el mundo."
    },
    {
      year:"2013",
      description:"Se funda AG College una institución académica de modalidad 100% virtual de estudios de nivel medio superior (bachillerato) y superior (licenciaturas e ingenierías) bajo un modelo de customización a nuestros clientes."
    },
    {
      year:"2015",
      description:"Se incorpora al Grupo la Universidad México Internacional fundada en 2004 como la institución oficial de estudios de nivel superior y posgrado."
    },
    {
      year:"2018",
      description:"Nace AG College Social una iniciativa que fomenta el desarrollo académico en personas de escasos recursos y con alto potencial, financiada por Grupo AG."
    },
    {
      year:"2019",
      description:"Se inicia la unidad de negocios eXR (Educación en Realidad Extendida) un modelo de desarrollo propio para la generación de experiencias de aprendizaje formales (cursos, diplomados, talleres) mediante modelos tridimensionales y realidad virtual."
    },
    {
      year:"2020",
      description:"Grupo AG se transforma en Academia Global, un corporativo con un enfoque en la generación soluciones de problemas complejos en empresas de todo el mundo."
    },
    {
      year:"2020",
      description:"Se funda Eartha Films. Productora de contenidos corporativos. Desarrollo del Concepto y Realización de convenciones, congresos, seminarios, así como producción de cortometrajes, cápsulas, debates, noticieros, entre otros."
    },
    {
      year:"2020",
      description:"Nace la unidad de negocios CE & TP (Certificaciones Ejecutivas y Títulos Propios) como una solución a las necesidades específicas de quienes buscan desarrollar competencias de alta aplicabilidad, de manera ágil y con procesos de aprendizaje más técnicos, en un entorno en donde la especialización tiene una relación directa con la diferenciación en el mercado profesional."
    },
  ]




  constructor() { 

  }

  ngOnInit(): void {
    $.getScript('../assets/ramon/movimiento.js');
  }

  


}
