import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { Spineris1Component } from './spineris1/spineris1.component';
import { TvnetComponent } from './tvnet/tvnet.component';
import { DelfiComponent } from './delfi/delfi.component';
import { IevadeComponent } from './ievade/ievade.component';
import { NavComponent } from './nav/nav.component';
import { FakeinstaComponent } from './fakeinsta/fakeinsta.component';
import { FakeinstaModule } from './fakeinsta/fakeinsta.module';
import { IluzijaComponent } from './iluzija/iluzija.component';
import { PogaComponent } from './poga/poga.component';

import {MatButtonModule} from '@angular/material/button';
import { InformacijaComponent } from './informacija/informacija.component';
import { WebsiteComponent } from './website/website.component';


 

@NgModule({
  declarations: [
    AppComponent,
    Spineris1Component,
    TvnetComponent,
    DelfiComponent,
    IevadeComponent,
    NavComponent,
    IluzijaComponent,
    PogaComponent,
    InformacijaComponent,
    WebsiteComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MatProgressSpinnerModule, 
    FakeinstaModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
