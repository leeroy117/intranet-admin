import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  public titulo: string;
  constructor() {
    
    this.titulo = "UserProfile";
   
  }

  ngOnInit(): void {
  }

}
