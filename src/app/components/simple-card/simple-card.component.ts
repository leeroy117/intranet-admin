import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
