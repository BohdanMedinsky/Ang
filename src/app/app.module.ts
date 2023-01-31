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
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryVanComponent } from './gallery-van/gallery-van.component';
import { GalleryLeoComponent } from './gallery-leo/gallery-leo.component';

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
  {path:'Gallery', component: GalleryComponent},

  {path: 'Van', component:  GalleryVanComponent},
  {path: 'Leo', component: GalleryLeoComponent},
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
    GalleryComponent,
    GalleryVanComponent,
    GalleryLeoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
