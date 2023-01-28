import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HobbyComponent } from './hobby/hobby.component';
import { BigCarComponent } from './big-car/big-car.component';
import { BigShipComponent } from './big-ship/big-ship.component';
import { BigAirComponent } from './big-air/big-air.component';
import { BaseComponent } from './base/base.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';

const routes: Routes =[{path: '', component: BaseComponent,
children:[
  {path: 'Air', component:  BigAirComponent},
  {path: 'Car', component: BigCarComponent},
  {path: 'Ship', component:  BigShipComponent}
]
},
  {path:'Bill_Gates', component:  FirstComponent},
  {path:'Rezume', component:  SecondComponent},
  {path:'Hobby', component: HobbyComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HobbyComponent,
    BigCarComponent,
    BigShipComponent,
    BigAirComponent,
    BaseComponent,
    ButtonMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
