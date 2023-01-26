import { Component } from '@angular/core';

@Component({
  selector: 'app-big-carrs',
  templateUrl: './big-carrs.component.html',
  styleUrls: ['./big-carrs.component.css']
})
export class BigCarrsComponent {
  title:string ='Найбільший автомобіль' 
  cost:string ='$'
  tip:string ='Надважкий'
  ms:string ='810 тонн '
  kr:string ='8100 к.с'
  speed:string ='64 км.год'
}
