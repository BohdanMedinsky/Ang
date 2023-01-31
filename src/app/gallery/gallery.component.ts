import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  Name:string ='Зоряна ніч' 
  avtor:string ='Вінсент Ван Гог ' 
  maps:string ='США, Нью-Йорк'
  price:number = 100000000 

  name:string ='Тайна Вечеря' 
  Avtor:string ='Леона́рдо да Ві́нчі ' 
  Maps:string ='Санта Марія'
  pricec:number = 50000000 
}
