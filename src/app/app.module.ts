import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeathernavComponent } from './weathernav/weathernav.component';
import { MainnewsComponent } from './mainnews/mainnews.component';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { FooterComponent } from './footer/footer.component';
import { NewnewsdetailsComponent } from './newnewsdetails/newnewsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WeathernavComponent,
    MainnewsComponent,
    NewsdetailComponent,
    RightcontentComponent,
    TrendingNewsComponent,
    WhatsnewComponent,
    FooterComponent,
    NewnewsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
