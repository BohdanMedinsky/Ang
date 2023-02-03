import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  items =["Виберіть World", "Ознайомтесь з 3  пропозиціями для туру ", "Є можливість натиснути на кнопку і переглянути  Інформацію про подорож", "Для повернення знову натисніть World у верх.меню"]
}
