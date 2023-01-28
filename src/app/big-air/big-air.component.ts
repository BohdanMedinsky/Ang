import { Component } from '@angular/core';

@Component({
  selector: 'app-big-air',
  templateUrl: './big-air.component.html',
  styleUrls: ['./big-air.component.css']
})
export class BigAirComponent {
  Name:string ='Найбільший літак' 
  hist:string ='Ан-225 «Мрія» (кодове імя НАТО — «Козак» англ. Cossack) — найбільший та найпотужніший у світі транспортний літак , створений київським КБ імені Антонова. Головний конструктор — Віктор Ілліч Толмачов.' 
  price:number = 300000
  pt:string ='складає 6100 к.с' 
  date:string = '21 грудня 1988'
}
