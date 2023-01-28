import { Component } from '@angular/core';

@Component({
  selector: 'app-big-ship',
  templateUrl: './big-ship.component.html',
  styleUrls: ['./big-ship.component.css']
})
export class BigShipComponent {
  Name:string ='Найбільший  лайнер' 
  hist:string ='Harmony of the Seas (укр. Гармонія морів) — найбільший круїзний лайнер у світі. Вага судна — 120 тисяч тонн, висота — 70 метрів, ширина — 66 метрів, загальна довжина — 362 метри.' 
  price:number = 1400000000
  pt:string ='складає 6100 к.с' 
  date:string = '21 листопада 2008'
}
