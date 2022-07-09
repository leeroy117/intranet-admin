import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  @Output() title: string = 'UserProfile';

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
