import { Component, OnInit, Input } from '@angular/core';
import { Musica } from '../models/musica.model';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.scss']
})
export class ListaMusicaComponent implements OnInit {

  @Input() titulo : string;
  @Input() musicas : Array<Musica> = new Array<Musica>();

  constructor() { }
  ngOnInit(): void {
  }

}
