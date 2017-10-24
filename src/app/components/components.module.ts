import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MinimalizaSidebarComponent } from './minimaliza-sidebar.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [    
    MinimalizaSidebarComponent
  ],
  exports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,    
    RouterModule,
    
    MinimalizaSidebarComponent
  ]
})
export class ComponentsModule {}
