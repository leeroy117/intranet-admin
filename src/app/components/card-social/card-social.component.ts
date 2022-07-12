import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-card-social',
  templateUrl: './card-social.component.html',
  styleUrls: ['./card-social.component.scss'],
})
export class CardSocialComponent implements OnInit {

  @Input() title: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
