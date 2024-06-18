import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: '**', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
