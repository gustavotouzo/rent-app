import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'layout-topnavbar',
  templateUrl: './topnavbar.component.html'
})
export class TopNavBarComponent implements OnInit {
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
