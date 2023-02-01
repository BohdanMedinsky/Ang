import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  items =["Виберіть Gallery", "Ознайомтесь з 2 картинами ", "Є можливість натиснути на кнопку і переглянути 3 найкращих роботи", "Для повернення знову натисніть Gallery у верх.меню"]
}
