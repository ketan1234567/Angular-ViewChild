import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
template:`{{message}}`
})
export class NumberComponent {
  message:string=''
  count:number=0
  increaseByOne(){
    this.count=this.count+1;
    this.message="Counter"+this.count
  }
  DecreaseByOne(){
    this.count=this.count-1;
    this.message="Counter"+this.count
  }

}
