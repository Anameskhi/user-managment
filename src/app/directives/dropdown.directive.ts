import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener('click') 
  toggleOpen(){
      this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open')
    }
  // @HostListener('document:click',['$event'])

  // backdropClick(event: any){
  //   if(!this.elementRef.nativeElement.contains(event.target)){
  //     this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open')
  //   }else{
  //   }
  // }
  constructor(
    private elementRef: ElementRef
  ) { }
}
