import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'layout-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private rout: ActivatedRoute
  ) {}

  currentUser: User;

  ngOnInit() {    
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )
  }
}
