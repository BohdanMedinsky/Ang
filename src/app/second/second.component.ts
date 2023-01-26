import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  
})
export class SecondComponent {
 name:string ='Мединський Богдан Петрович' 
 email:string ='mbogdanp2001@gmail.com'
salary: number = 2000
course: number = 0.50
age: number = 21

}
