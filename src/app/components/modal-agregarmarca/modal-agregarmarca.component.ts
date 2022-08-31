import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marca.service';
@Component({
  selector: 'app-modal-agregarmarca',
  templateUrl: './modal-agregarmarca.component.html',
  styleUrls: ['./modal-agregarmarca.component.scss']
})
export class ModalAgregarmarcaComponent implements OnInit {

  constructor(private marcaService:MarcaService ) { }

  marca: string='';
  descripcion: string='';

  ngOnInit(): void {
  }

  postMarca(){
    const response =this.marcaService.postMarca(this.marca,this.descripcion)
  
      console.log(response);
  }


}
