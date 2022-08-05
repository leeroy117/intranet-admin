import { Component, Input, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marca.service';


@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';

  marcList: any = [];

  constructor(private marcaService:MarcaService 
    ) { }

  ngOnInit(): void {
    this.marcas();

  }

  marcas(){
    this.marcaService.getMarca().subscribe ((response: any) =>this.marcList = response.data);
  }


}
