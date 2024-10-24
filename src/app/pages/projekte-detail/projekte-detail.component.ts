import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroSectionContent} from '../../../types/types';
import {HeroSectionComponent} from '../../shared/hero-section/hero-section.component';
import {ContainerComponent} from '../../shared/container/container.component';
import {ProjectsComponent} from '../../shared/projects/projects.component';
import {ValuesComponent} from '../../shared/values/values.component';
import {DomSanitizer, SafeHtml, Title} from '@angular/platform-browser';
import {InfosComponent} from '../../shared/infos/infos.component';

@Component({
  selector: 'app-projekte-detail',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ContainerComponent,
    ProjectsComponent,
    ValuesComponent,
    InfosComponent
  ],
  templateUrl: './projekte-detail.component.html',
  styleUrl: './projekte-detail.component.scss'
})
export class ProjekteDetailComponent implements OnInit {
  protected heroSectionContent: HeroSectionContent = {
    title: "",
    backgroundImage: "/images/content/projekte.jpg",
    buttons: []
  }
  protected text: string;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title) {
  }

  formatTextToHTML(text: string): SafeHtml {
    const htmlString = text.split('\n')
      .map(line => `<p class="text">${line}</p>`)
      .join('');
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      switch (params["url"]) {
        case "b1-bildung-in-kirgistan": {
          this.text = "Kirgistan befindet sich in Zentralasien und war früher Teil der Sowjetunion. Seit der Unabhängigkeit von Kirgistan im Jahr 1991 leidet das Land unter gewaltiger Armut. Eine der tragischen Folgen dieser Armut sind einerseits sogenannte «Migrantenkinder», deren Eltern Arbeitsmigranten in umliegenden Ländern und Russland sind. Die Kinder werden mehr oder weniger gut von Grosseltern oder anderen Verwandten betreut. Eine weitere Folge sind sogenannte «Care Leavers» – Kinder, die in staatlichen Institutionen aufwachsen, entweder weil sie Vollwaisen sind oder weil ihre Familien sie nicht ernähren können, und im Alter von 15 oder 16 Jahren diese Kinderheime wieder verlassen und für sich selbst sorgen müssen. Ohne Unterstützung schafft es kaum eine dieser jugendlichen Personen, weiter in ihre Ausbildung zu investieren und so setzt sich die Armutsspirale fort. Aus diesem Grund unterstützt KAIRESH im Projekt B1 Jugendliche und junge Erwachsene in Kirgistan zum Abschluss einer Aus- oder Weiterbildung. Unser Partner vor Ort ist Oasis Kirgistan"
          this.heroSectionContent.title = "Bildung in Kirgistan";
          break;
        }
        case "b2-bildung-in-mosambik": {
          this.text = "Als eines der ärmsten Länder verfügt Mosambik kaum über ein Berufsausbildungssystem. Nebst den Universitäten gibt es inzwischen einige Institute, welche Berufsausbildungen im Sinne einer Höheren Fachschule anbieten und staatlich anerkannt sind. Sowohl ein Studium an der Universität, als auch die Ausbildung an einer Höheren Fachschule sind von den Familien der Jugendlichen im vollen Umfang selber zu bezahlen. Staatliche Unterstützung im Sinne von Subventionen der Ausbildungsstätten oder Stipendien gibt es keine. Oft bleiben weiterführende Ausbildungen der privilegierten Mittelschicht vorbehalten. Deshalb setzen wir uns seit Januar 2014 Jahren im Rahmen des Projektes B2 für die berufliche Ausbildung von Jugendlichen in Mosambik ein, um ihnen damit die Chancen auf dem Arbeitsmarkt und somit zu einem eigenständigen Leben zu erhöhen."
          this.heroSectionContent.title = "Bildung in Mosambik";
          break;
        }
        case "u1-unterstuetzung-oasis-kirgistan": {
          this.text = "Die Nichtregierungsorganisation Oasis Kirgistan wurde 2008 von Thirza und Konrad Schneider gegründet. Der Fokus der Organisation liegt in erster Linie auf sogenannten Care Leavers, welche mit 15 oder 16 Jahren die Kinderheime verlassen müssen und danach auf sich allein gestellt sind. Dies ist für die betroffenen Jugendlichen – Mitten in der Pubertät – ein herausfordernder Prozess. Hinzu kommt, dass praktisch alle Jugendliche während ihrer Kindheit eine Form von Missbrauch oder Gewalt erlebt haben. Ohne Unterstützung landen viele von ihnen auf der Strasse, in der organisierten Kriminalität, in der Zwangsarbeit im Ausland oder in der Prostitution. Zusätzlich arbeitet Oasis Kirgistan vermehrt mit sogenannten «Migrantenkindern», deren Eltern als Arbeitsmigranten im nahen Ausland leben. Auch sie landen oft auf der Strasse, in der Kriminalität, werden Opfer von Gewalt, Ausbeutung und Menschenhandel. Immer öfter hat Oasis Kirgistan es mit minderjährigen Opfern vom Menschenhandel zu tun.\nOasis Kirgistan wird durch private Spenden und durch Spendengelder von öffentlichen und privaten Institutionen und zu einem kleinen Teil vom kirgisischen Ministerium für Arbeit und Soziale Entwicklung unterstützt. Diese Spendengelder fluktuieren sehr, weshalb sich Oasis Kirgistan in ihrer Planung und ihrem Budget nicht vollkommen darauf verlassen kann. Hinzu kommt, dass diese Spendengelder nur zu einem sehr kleinen Prozentsatz die Zentralkosten, wie Büromiete oder Saläre decken. Aus diesem Grund hat KAIRESH entschieden, Oasis Kirgistan allgemein zu unterstützen. Spendengelder für das Projekt U1 werden an Oasis Kirgistan weitergeleitet und können von der Leitung dort eingesetzt werden, wo es die Organisation gerade am meisten benötigt. Die Leitung von Oasis Kirgistan berichtet KAIRESH regelmässig wofür das Geld verwendet wird."
          this.heroSectionContent.title = "Unterstützung Oasis Kirgistan";
          break;
        }
        case "u2-unterstuetzung-kedesh-mosambik": {
          this.text = "In Mosambik leben schätzungsweise 1,47 Millionen Waisenkinder. Grund hierfür ist mitunter die grosse Verbreitung von AIDS. Zurückgebliebenen Familien- angehörigen (wie Grosseltern, Onkeln, Tanten) mangelt es oft an genügend ökonomischen Ressourcen, um ausreichend für diese Kinder zu sorgen, weshalb Waisenkinder nicht selten auf sich allein gestellt sind und früher oder später auf der Strasse leben.\nTrotz den Bemühungen seitens der Regierung, diesen Missstand zu beheben, sind immer mehr Familien und Kinder auf staatliche Unterstützung angewiesen. Kedesh ist ein Knabenwaisenhaus in Beira, Mosambik, und ergänzt als nicht- staatliche Organisation das vorhandene Angebot der Regierung. Das Waisenhaus wurde im Jahr 1999 von John Wickes (Amerikaner) gegründet und hat Platz für max. 35 Knaben zwischen 6 und 18 Jahren. Die Kinder und Jugendlichen sind Halb- oder Vollwaisen und in unterschiedlichen Verhältnissen aufgewachsen. Einige von ihnen lebten auch während einer kurzen Dauer auf der Strasse. In einer familiären Atmosphäre bietet das Waisenhaus den Knaben ein stabiles und sicheres Zuhause und ermöglicht ihnen den Schulbesuch der 12-jährigen obligatorischen Schulzeit. Ziel des Waisenhauses ist es, die Kinder und Jugendlichen aufzunehmen, bevor sie auf der Strasse leben und sie dann im Waisenhaus, entsprechend ihren Fähigkeiten, zu einem möglichst selbständigen Leben heranzuführen."
          this.heroSectionContent.title = "Unterstützung Kedesh in Mosambik";
          break;
        }
        default: {
          console.error("Unknown project: " + params["url"]);
        }
      }
      this.titleService.setTitle(`${this.heroSectionContent.title} - Projekte - Kairesh`);
    })
  }
}
