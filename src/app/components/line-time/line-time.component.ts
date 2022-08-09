import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'app-line-time',
  templateUrl: './line-time.component.html',
  styleUrls: ['./line-time.component.scss']
})
export class LineTimeComponent implements OnInit {

  constructor() { }

  @Input() text: string = '';
  @Input() date: string = '';

  ngOnInit(): void {
     $.getScript('../assets/ramon/movimiento.js');
  }

}
