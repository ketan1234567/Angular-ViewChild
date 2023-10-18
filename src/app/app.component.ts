import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<app-number-parent></app-number-parent>
  
  <app-stopwatch-parent></app-stopwatch-parent>
  <app-cpcolor-parent></app-cpcolor-parent>
  <app-cptheme></app-cptheme>
  `
})
export class AppComponent {
  title = 'Angular-ViewChild';

} 
