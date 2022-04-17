import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurPageComponent } from './our-page/our-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CovidComponent } from './covid/covid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BranchComponent } from './branch/branch.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    OurPageComponent,
    NavbarComponent,
    CovidComponent,
    HeaderComponent,
    CarouselComponent,
    BranchComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
