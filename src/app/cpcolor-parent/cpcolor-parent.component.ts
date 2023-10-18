import { Component, ViewChild } from '@angular/core';
import { CpcolorDirective } from '../cpcolor.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html',
  styleUrls: ['./cpcolor-parent.component.css']
})
export class CpcolorParentComponent {
  @ViewChild(CpcolorDirective)
  private cpColorDirective={} as CpcolorDirective
  changeColor(color:string){
    this.cpColorDirective.change(color)
  }

}
