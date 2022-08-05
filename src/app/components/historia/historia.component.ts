import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {

  @Input() date: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
   $.getScript('../assets/ramon/movimiento.js');
  }

}
