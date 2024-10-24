import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {VereinComponent} from './pages/verein/verein.component';
import {ProjekteComponent} from './pages/projekte/projekte.component';
import {ProjekteDetailComponent} from './pages/projekte-detail/projekte-detail.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import {KontaktComponent} from './pages/kontakt/kontakt.component';

export const routes: Routes = [
  { path: "", title: "KAIRESH - Neue Perspektiven für Jugendliche in Not", component: HomeComponent },
  { path: "verein", title: "Der Verein - KAIRESH", component: VereinComponent },
  { path: "projekte", title: "Projekte - KAIRESH", component: ProjekteComponent },
  { path: "projekte/:url", title: "Projekt - KAIRESH", component: ProjekteDetailComponent },
  { path: "impressum", title: "Impressum - KAIRESH", component: ImpressumComponent },
  { path: "datenschutz", title: "Datenschutz - KAIRESH", component: DatenschutzComponent },
  { path: "kontakt", title: "Kontakt - KAIRESH", component: KontaktComponent },
];
