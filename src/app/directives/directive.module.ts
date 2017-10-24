import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SideNavigationDirective } from './side-navigation.directive';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    SideNavigationDirective
  ],
  exports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,    
    RouterModule,

    SideNavigationDirective
  ]
})
export class DirectiveModule {}
