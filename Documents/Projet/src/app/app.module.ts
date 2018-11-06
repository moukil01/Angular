import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrendComponent } from './trend/trend.component';
import { TendPlanetComponent } from './tend-planet/tend-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendComponent,
    TendPlanetComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
