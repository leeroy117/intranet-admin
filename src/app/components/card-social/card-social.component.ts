import { Component, Input,OnInit } from '@angular/core';
import { DirectorioService } from 'src/app/services/directorio.service';



@Component({
  selector: 'app-card-social',
  templateUrl: './card-social.component.html',
  styleUrls: ['./card-social.component.scss'],
})
export class CardSocialComponent implements OnInit {

  @Input() title: string = '';
  colaList: any =[];
  
  constructor(private directorioService: DirectorioService) { 
  }
  ngOnInit(): void {
    this.colaborador();
  }

  colaborador(){
    this.directorioService.getColaborador().subscribe ((response: any) =>this.colaList = response.data);
  }

}
