import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {VereinComponent} from './pages/verein/verein.component';
import {ProjekteComponent} from './pages/projekte/projekte.component';
import {ProjekteDetailComponent} from './pages/projekte-detail/projekte-detail.component';

export const routes: Routes = [
  { path: "", title: "KAIRESH - Neue Perspektiven für Jugendliche in Not", component: HomeComponent },
  { path: "verein", title: "Der Verein - KAIRESH", component: VereinComponent },
  { path: "projekte", title: "Projekte - KAIRESH", component: ProjekteComponent },
  { path: "projekte/:url", title: "Projekt - KAIRESH", component: ProjekteDetailComponent },
];
