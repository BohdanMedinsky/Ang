import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HobbyComponent } from './hobby/hobby.component';
import { ButtonmenuComponent } from './buttonmenu/buttonmenu.component';
import { BigAirComponent } from './big-air/big-air.component';
import { BigCarrsComponent } from './big-carrs/big-carrs.component';
import { BigShipComponent } from './big-ship/big-ship.component';
import { BaseComponent } from './base/base.component';

const routes: Routes =[
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
    ButtonmenuComponent,
    BigAirComponent,
    BigCarrsComponent,
    BigShipComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
