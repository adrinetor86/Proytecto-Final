import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-nuestroequipo',
  templateUrl: './nuestroequipo.component.html',
  styleUrl: './nuestroequipo.component.css'
})
export class NuestroequipoComponent implements OnInit{


  constructor(private tituloPagina:Title) { }

  ngOnInit() {
    scrollTo(0,0);
    this.tituloPagina.setTitle("Nuestro Equipo")
  }

}
