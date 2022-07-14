import { Component, Input ,OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class UserProfileComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
