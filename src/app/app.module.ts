import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './router/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IssService } from './services/iss.service';
import { MapComponent } from './components/home/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { IssTeamComponent } from './components/home/iss-team/iss-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MapComponent,
    IssTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtfE4r7AaAQyCsFL1WQr0yFdKA__KvNYo'
    })
  ],
  providers: [
    AppRoutingModule,
    IssService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
