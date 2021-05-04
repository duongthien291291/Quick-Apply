import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LeftHeaderComponent } from './left-header/left-header.component';
import { RightHeaderComponent } from './right-header/right-header.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFooterComponent,
    BaseHeaderComponent,
    MainHeaderComponent,
    LeftHeaderComponent,
    RightHeaderComponent,
    MainArticleComponent,
    MainFooterComponent,
    TopFooterComponent,
    BottomFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
