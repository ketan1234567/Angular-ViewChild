import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpcolor]'
})
export class CpcolorDirective implements AfterViewInit {

  constructor(private elRef:ElementRef) { }
  ngAfterViewInit() {
    this.elRef.nativeElement.style.color='red';
    console.log("This is ngAfterViewInit");
    
   
  }
  change(ChangeColor:string){
    this.elRef.nativeElement.style.color=ChangeColor;
    console.log("This is change color");
    

  }

}
