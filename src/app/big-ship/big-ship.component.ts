import { Component } from '@angular/core';

@Component({
  selector: 'app-big-ship',
  templateUrl: './big-ship.component.html',
  styleUrls: ['./big-ship.component.css']
})
export class BigShipComponent {
  title:string ='Найбільший корабель' 
  cost:string ='1млрд євро'
  tip:string ='Лайнер'
  width:string ='66 м '
  height:string ='382 м'
  top:string ='70 м'
}
