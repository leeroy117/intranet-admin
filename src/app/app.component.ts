import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginService  } from './services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'api_intranet';

  constructor(private loginService: LoginService ){
    console.log('El componente se ha creado');

  }

  ngOnInit() {
    // $.getScript('../assets/js/scrollbar/simplebar.js');
    // $.getScript('../assets/js/scrollbar/custom.js');
    // $.getScript('../assets/js/config.js');
    // $.getScript('../assets/js/sidebar-menu.js');
    // $.getScript('../assets/js/script.js');
    // $.getScript('../assets/js/theme-customizer/customizer.js');

    console.log('El componente se ha inicializado');
    //this.loginService.getLogin().subscribe ((response: any) => console.log(response));

  }

}

