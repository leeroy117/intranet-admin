import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class UserprofileComponent implements OnInit {

  @Output() title: string = 'UserProfile';

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
