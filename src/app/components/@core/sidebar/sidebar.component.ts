import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('../assets/js/scrollbar/simplebar.js');
    $.getScript('../assets/js/scrollbar/custom.js');
    $.getScript('../assets/js/config.js');
    $.getScript('../assets/js/sidebar-menu.js');
    $.getScript('../assets/js/script.js');
    $.getScript('../assets/js/theme-customizer/customizer.js');
  }

}
