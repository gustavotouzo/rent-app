import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'minimaliza-sidebar',
  template: '<span><a class="navbar-minimalize minimalize-styl-2 btn btn-primary" routerLink="#" (click)="minimalize()"><i class="fa fa-bars"></i></a></span>'
})
export class MinimalizaSidebarComponent implements OnInit {
  constructor (
    
  ) {}

  ngOnInit() {    
    
  }

  minimalize(){
    jQuery("body").toggleClass("mini-navbar");
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                jQuery('#side-menu').fadeIn(400);
            }, 200);
    } else if (jQuery('body').hasClass('fixed-sidebar')){
        jQuery('#side-menu').hide();
        setTimeout(
            function () {
                jQuery('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }

  }

}

