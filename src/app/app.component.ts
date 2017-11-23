import { Component, OnInit } from '@angular/core';

import { UserService } from './shared';

import './js/apps.min.js'
import './js/dashboard.min.js'

declare var $:any;
declare var App:any;
declare var Dashboard:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {  	
    this.userService.populate();
  }

  ngAfterViewInit() {
    App.init();
    Dashboard.init();
  }
}
