import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DirectorioService } from 'src/app/services/directorio.service';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  departList: any =[];
  accesoList: any =[];
  puestoList: any =[];

  constructor(private departamentoService: DepartamentoService ,private directorioService: DirectorioService,private puestoService: PuestoService) { 
  }
  ngOnInit(): void {
    this.departamento();
    this.accesos();
    this.puesto();
  }


  departamento(){
    this.departamentoService.getDepartamento().subscribe ((response: any) =>this.departList = response.data);
  }

  accesos(){
    this.directorioService.getAccesos().subscribe ((response: any) =>this.accesoList = response.data);
  }

  puesto(){
    this.puestoService.getPuestos().subscribe ((response: any) =>this.puestoList = response.data);
  }
}
