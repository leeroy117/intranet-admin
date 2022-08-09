import { Component, OnInit, Output } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';


@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {


  @Output() title: string = 'Historia';


  histoList: any = [];

  constructor(private historiaService:HistoriaService) { 

  }

  ngOnInit(): void {
    this.historia();
  }

  historia(){
    this.historiaService.getHistoria().subscribe ((response: any) => console.log(this.histoList = response.data));
  }


}
