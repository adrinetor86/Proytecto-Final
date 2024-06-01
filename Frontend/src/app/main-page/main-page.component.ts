import {Component,OnDestroy, OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {JuegosService} from "../servicios/juegos.service";
import {FiltrosService} from "../servicios/filtros.service";
import {Juego, juegoMain} from "../interfaces/juego";
import {Subject, Subscription} from 'rxjs';
import {BuscadorComponent} from "./buscador/buscador.component";
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit,OnDestroy {
  @ViewChild(BuscadorComponent) buscador: BuscadorComponent;
  games:Juego[]=[]
  gamesPrueba:juegoMain[]=[]
  currentPage: number = 1;
  totalGames: number;
  nextPage: number;
  prevPage: number;
  cadenaBusqueda: string = '';
  private suscripcion: Subscription;
  suscripcionFiltros: Subscription;
  opcionesFiltro: string[] = [];
  generosOpciones=[]
  plataformasOpciones=[]
  sidebarVisible: boolean = false;

  private getGamesSubject: Subject<void> = new Subject<void>();
  constructor(private juegosservice:JuegosService,private filtrosService:FiltrosService) { }

  ngOnInit() {

    this.getGamesSubject
      .subscribe({
        next: () => {
          this.suscripcion = this.juegosservice.getJuegosApi(this.currentPage,this.cadenaBusqueda).subscribe(juegos => {
            this.gamesPrueba = juegos['results'];
            this.currentPage = juegos['current_page'];
            this.nextPage = juegos['next'];
            this.prevPage = juegos['prev'];
            this.totalGames = juegos['count_results'];
            console.log(this.gamesPrueba);
            // this.juegosFiltrados = [...this.gamesPrueba];
            // this.games = this.juegosservice.getJuegos();
          });
        },

      });
    this.suscripcionFiltros=this.filtrosService.getFiltros().subscribe(filtros => {
      this.opcionesFiltro = filtros;
      this.generosOpciones=this.opcionesFiltro['genders']
      this.plataformasOpciones=this.opcionesFiltro['platforms']

       console.log(this.generosOpciones);
       console.log(this.plataformasOpciones);

    });


    this.getGamesSubject.next();

  }

  selectedGenres: number[] = [];
  selectedPlatforms: number[] = [];

  onGenreChange(genreId: number, event: any): void {
    if (event.target.checked) {
      this.selectedGenres.push(genreId);
      console.log(this.selectedGenres);
    } else {
      this.selectedGenres = this.selectedGenres.filter(id => id !== genreId);
    }
  }

  onPlatformChange(platformId: number, event: any): void {

    if (event.target.checked) {
      this.selectedPlatforms.push(platformId);
        console.log(this.selectedPlatforms);
    } else {
      this.selectedPlatforms = this.selectedPlatforms.filter(id => id !== platformId);
    }
  }


  onSearchTermChange(newTerm: string) {
    this.cadenaBusqueda = newTerm;
    this.getGamesSubject.next();

  }


  ngOnDestroy() {
      this.suscripcion.unsubscribe();
      this.suscripcionFiltros.unsubscribe();
  }


  changePage(page: number) {
      this.currentPage = page;
      this.getGamesSubject.next();
  }


}

