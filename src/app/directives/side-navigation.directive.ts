import {
  Directive,
  Input,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  TemplateRef,
  ElementRef
} from '@angular/core';

declare var jQuery:any;

@Directive({ selector: '[side-navigation]' })
export class SideNavigationDirective {
  constructor(
    //private templateRef: TemplateRef<any>,
    //private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    //setTimeout(()=>{      
      //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      jQuery(this.elementRef.nativeElement).metisMenu();
      //jQuery(this.elementRef).metisMenu();
      //this.menuElement = this.el.nativeElement.querySelector('#side-menu');
      //(<any>$(this.menuElement)).metisMenu();
      //this.el.metisMenu();
    //});
  }

}
