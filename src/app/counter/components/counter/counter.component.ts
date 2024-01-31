import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
          <hr>
          <p>
            holis {{count}}
          </p>

          <input type="button" (click)="increaseBy(1)" value="+1">
          <input type="button" (click)="reset()" value="Reset">
          <input type="button" (click)="increaseBy(-1)" value="-1">
        `
})

export class CounterComponent{
  constructor() { }

  public title:string = 'Hola mundo';
  public count: number = 10;

  increaseBy(value:number):void{
    this.count += value;

  }

  reset():void{
    this.count = 10;
  }
}
