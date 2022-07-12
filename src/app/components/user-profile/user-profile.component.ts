import { Component, Input ,OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  
})
export class UserProfileComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
