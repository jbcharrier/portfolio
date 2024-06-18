import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { FormationComponent } from './formation/formation.component';
import { CompetencesComponent } from './competences/competences.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AccueilComponent, ParcoursComponent, FormationComponent, CompetencesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
