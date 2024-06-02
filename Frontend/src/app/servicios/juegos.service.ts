import { Injectable } from '@angular/core';
import {Juego, juegoMain} from "../interfaces/juego";
import {Observable, Subscription, timeout} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  // indico que es un objeto de tipo Juego

  suscripcion: Subscription;

  gamesPrueba:juegoMain[] = [];
  private counter=0;

  constructor(private http: HttpClient) { }

  getJuegosApi(pagina:number,cadenaBusqueda:string,selectedGenres:number[],selectedPlatforms:number[]):Observable<juegoMain[]> {

    console.log("hace llamada manito a la pagina: "+pagina)
    const body={
      page:pagina,
      value:cadenaBusqueda,
      plataforms:selectedPlatforms,
      genders:selectedGenres
    }
    return this.http.post<juegoMain[]>("http://127.0.0.1:8000/api/v1/games/", JSON.stringify(body));
    // return this.http.post<juegoMain[]>("http://127.0.0.1:8000/api/v1/games/", body);

  }


  cerrarConexion(){
    this.suscripcion.unsubscribe();
  }



}
